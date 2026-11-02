import { execFileSync } from 'node:child_process'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { securityPolicy } from './security-policy.js'

const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID
if (!distributionId || !/^[A-Z0-9]+$/.test(distributionId))
  throw new Error('CloudFront 배포 ID가 필요합니다.')
const aws = (...args) =>
  JSON.parse(
    execFileSync(
      'aws',
      ['cloudfront', ...args, '--output', 'json', '--no-cli-pager'],
      { encoding: 'utf8' },
    ),
  )
const directory = mkdtempSync(join(tmpdir(), 'quasar-headers-'))
const jsonFile = (name, data) => {
  const file = join(directory, name)
  writeFileSync(file, JSON.stringify(data))
  return `file://${file}`
}

try {
  const current = aws('get-distribution-config', '--id', distributionId)
  const config = current.DistributionConfig
  // 별도 origin/behavior는 운영 확인 없이 수정하지 않는다.
  if (config.CacheBehaviors?.Quantity > 0)
    throw new Error(
      '추가 cache behavior가 있습니다. 각 behavior의 보안 정책을 검토한 뒤 적용하세요.',
    )
  const behavior = config.DefaultCacheBehavior
  const oldId = behavior.ResponseHeadersPolicyId
  console.log(`기존 응답 헤더 정책: ${oldId || '(없음)'}`)
  const existing = oldId
    ? aws('get-response-headers-policy', '--id', oldId).ResponseHeadersPolicy
        .ResponseHeadersPolicyConfig
    : undefined
  const name = `quasar-${distributionId}-security`
  const policies = aws(
    'list-response-headers-policies',
    '--type',
    'custom',
  ).ResponseHeadersPolicyList
  const owned = policies?.Items?.find(
    (item) =>
      item.ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name === name,
  )
  const desired = securityPolicy(existing, name)
  let policyId
  if (owned) {
    policyId = owned.ResponseHeadersPolicy.Id
    const policy = aws('get-response-headers-policy', '--id', policyId)
    if (
      JSON.stringify(
        policy.ResponseHeadersPolicy.ResponseHeadersPolicyConfig,
      ) !== JSON.stringify(desired)
    ) {
      // 공유된 정책을 덮어쓰지 않는다.
      const users = aws(
        'list-distributions-by-response-headers-policy-id',
        '--response-headers-policy-id',
        policyId,
      ).DistributionIdList
      if (users?.Items?.some((id) => id !== distributionId))
        throw new Error('다른 배포가 사용하는 보안 정책입니다.')
      aws(
        'update-response-headers-policy',
        '--id',
        policyId,
        '--if-match',
        policy.ETag,
        '--response-headers-policy-config',
        jsonFile('policy.json', desired),
      )
    }
  } else {
    policyId = aws(
      'create-response-headers-policy',
      '--response-headers-policy-config',
      jsonFile('policy.json', desired),
    ).ResponseHeadersPolicy.Id
  }
  if (oldId !== policyId) {
    behavior.ResponseHeadersPolicyId = policyId
    aws(
      'update-distribution',
      '--id',
      distributionId,
      '--if-match',
      current.ETag,
      '--distribution-config',
      jsonFile('distribution.json', config),
    )
  }
  console.log(
    '보안 헤더 정책 연결 완료. CloudFront 전파 후 운영 응답을 확인하세요.',
  )
} finally {
  rmSync(directory, { recursive: true, force: true })
}
