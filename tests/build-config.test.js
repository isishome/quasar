import assert from 'node:assert/strict'
import test from 'node:test'
import config from '../vite.config.js'

const plugin = config.plugins
  .flat()
  .find((item) => item.name === 'vite:quasar:script')
plugin.configResolved({ command: 'build', isProduction: true })

test('실제 Quasar import만 변환하고 강좌 문자열은 보존한다', () => {
  const example = 'const lesson = "import { UnknownExample } from \'quasar\'"'
  const result = plugin.transform.handler.call(
    {},
    `import { QBtn } from 'quasar'\n${example}`,
    '/src/example.js',
  )
  assert.ok(result.code.includes(example))
  assert.ok(result.code.includes('quasar/src/components/btn/QBtn.js'))
  assert.equal(
    plugin.transform.handler.call({}, example, '/src/example.js'),
    null,
  )
})
