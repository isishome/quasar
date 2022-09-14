<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useQuasar } from 'quasar'
defineProps({
  sec: {
    type: String,
    default: 'main'
  }
})

const $q = useQuasar()
const Editor = defineAsyncComponent(() => import('@/components/block/Editor.vue'))
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))

$q.lang.set('en')

const contents = ref('')

const update = (val) => {
  contents.value = val
}
</script>

<template>
  <div style="width:1000px;max-width: 100%;margin:0 auto;word-break: break-all;">
    <div class="q-py-xl"></div>
    <q-btn icon="dark_mode" @click="$q.dark.set(!$q.dark.isActive)"></q-btn>
    <div class="q-py-xl"></div>
    <Editor :contents="contents" @update="update" />
    <div>{{ contents }}</div>
    <div style="height:10vh"></div>
    <Code language="html" :convert="{'html':'vue'}">
      <textarea readonly>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Vite App&lt;/title&gt;
    &lt;link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; /&gt;
    &lt;link href=&quot;/styles/prism-vsc-dark-plus.css&quot; rel=&quot;stylesheet&quot; /&gt;
    &lt;script src=&quot;/scripts/prism.js&quot; data-manual&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
    &lt;script type=&quot;module&quot; src=&quot;/src/main.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </textarea>
    </Code>
    <div style="height:100vh"></div>
    <Code language="javascript" :convert="{'javascript':'js'}" intersection>
      <textarea readonly>""
import { fileURLToPath, URL } from &#39;url&#39;

import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import { quasar, transformAssetUrls } from &#39;@quasar/vite-plugin&#39;

// https://vitejs.dev/config/
export default defineConfig(({ command }) =&gt; {
  return {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar()],
    resolve: {
      alias: {
        &#39;@&#39;: fileURLToPath(new URL(&#39;./src&#39;, import.meta.url))
      }
    },
    base: command === &#39;build&#39; ? &#39;&#39; : &#39;&#39;
  }
})
      </textarea>
    </Code>
  </div>
</template>