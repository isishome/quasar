import test from 'node:test'
import assert from 'node:assert/strict'
import { securityPolicy } from '../deploy/security-policy.js'

test('보안 헤더와 단계적 HSTS를 추가한다', () => {
  const policy = securityPolicy(undefined, 'test')
  assert.equal(policy.SecurityHeadersConfig.ContentTypeOptions.Override, true)
  assert.equal(
    policy.SecurityHeadersConfig.StrictTransportSecurity.AccessControlMaxAgeSec,
    86400,
  )
  assert.equal(
    policy.SecurityHeadersConfig.StrictTransportSecurity.IncludeSubdomains,
    false,
  )
  assert.equal(
    policy.SecurityHeadersConfig.ContentSecurityPolicy.ContentSecurityPolicy,
    "object-src 'none'; base-uri 'self'; frame-ancestors 'self'",
  )
})

test('기존 CORS, custom header와 더 엄격한 보안 정책은 보존한다', () => {
  const existing = {
    CorsConfig: { example: true },
    CustomHeadersConfig: { Quantity: 0 },
    SecurityHeadersConfig: {
      ContentSecurityPolicy: {
        ContentSecurityPolicy: "default-src 'none'",
        Override: true,
      },
      StrictTransportSecurity: { AccessControlMaxAgeSec: 31536000 },
    },
  }
  const result = securityPolicy(existing, 'test')
  assert.deepEqual(result.CorsConfig, existing.CorsConfig)
  assert.deepEqual(result.CustomHeadersConfig, existing.CustomHeadersConfig)
  assert.deepEqual(
    result.SecurityHeadersConfig.ContentSecurityPolicy,
    existing.SecurityHeadersConfig.ContentSecurityPolicy,
  )
  assert.equal(
    result.SecurityHeadersConfig.StrictTransportSecurity.AccessControlMaxAgeSec,
    31536000,
  )
  assert.equal(existing.Name, undefined)
  assert.deepEqual(securityPolicy(result, 'test'), result)
})
