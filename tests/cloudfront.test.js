import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import test from 'node:test'

const context = vm.createContext({})
vm.runInContext(
  readFileSync(
    new URL('../deploy/cloudfront-request.js', import.meta.url),
    'utf8',
  ),
  context,
)

test('직접 경로와 끝 슬래시 및 쿼리를 보존한다', () => {
  for (const uri of ['/', '/intro/why', '/intro/why/']) {
    const request = {
      uri,
      method: 'GET',
      querystring: { q: { value: 'test' } },
    }
    assert.equal(context.handler({ request }).uri, '/index.html')
    assert.equal(request.querystring.q.value, 'test')
  }
})

test('정적 파일과 비조회 요청은 변경하지 않는다', () => {
  for (const uri of [
    '/assets/missing.js',
    '/assets/missing',
    '/favicon/',
    '/ai-catalog.json',
    '/robots.txt',
  ]) {
    assert.equal(context.handler({ request: { uri, method: 'GET' } }).uri, uri)
  }
  assert.equal(
    context.handler({ request: { uri: '/intro/why', method: 'POST' } }).uri,
    '/intro/why',
  )
})
