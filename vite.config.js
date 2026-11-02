import { fileURLToPath, URL } from 'url'
import { defineConfig, parseSync } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// Quasar 2.0.2의 문자열 정규식 변환이 강좌 코드 예제까지 변경하지 않게 한다.
const quasarPlugins = quasar()
const scriptPlugin = quasarPlugins.find(
  (plugin) => plugin.name === 'vite:quasar:script',
)
const transformScript = scriptPlugin.transform.handler
scriptPlugin.transform.handler = function (source, id) {
  const imports = parseSync(id, source, { lang: 'js' }).program.body.filter(
    (node) =>
      node.type === 'ImportDeclaration' && node.source.value === 'quasar',
  )
  let code = source
  for (const node of imports.reverse()) {
    const result = transformScript.call(
      this,
      source.slice(node.start, node.end),
      id,
    )
    if (result)
      code = code.slice(0, node.start) + result.code + code.slice(node.end)
  }
  return code === source ? null : { code, map: null }
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasarPlugins,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
  },
})
