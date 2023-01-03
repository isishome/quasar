<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section>
      <Title head>성능 끌어올리기</Title>
      <p>
        Quasar를 사용해 만든 프로젝트를 실제로 배포하여 서비스를 하게 되면 로컬에서 작업할 때와 다른 성능 경험으로 인해 고민에 빠지는 경우가 있습니다. 최적화되지 않은 코드, 외부에서 가져오는 웹폰트
        또는 모듈, 큰 용량의 내부 폰트, 그리고 배포 서버의 성능 등과 같은 환경에 영향을 받기 때문입니다. 이번 챕터에서는 성능 또는 최적화에 도움이 될만한 몇 가지를 소개해 보도록 하겠습니다.
      </p>
    </section>
    <section id="font" data-name="기본 폰트 해제">
      <Title sub>기본 폰트 해제</Title>
      <p>
        <Link href="https://vitejs.dev/" color="deep-purple-6">Vite</Link> 플러그인용 Quasar 사용시 기본적으로 <em>Roboto font</em>를
        사용하도록 설정됩니다. <em>main.js</em> 파일에 정의된
        <code>import '@quasar/extras/roboto-font/roboto-font.css'</code>이 바로 그 부분인데요.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{ 'javascript': 'js' }">
        <textarea readonly>
// main.js

import &#123; createApp &#125; from 'vue'
{{ 'import &#123; Quasar &#125; from \'quasar\'' }}

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css' // 이곳
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, &#123;
  plugins: &#123;&#125;, // import Quasar plugins and add here
&#125;)

// Assumes you have a &#60;div id="app"&#62;&#60;/div&#62; in your index.html
myApp.mount('#app')
        </textarea>
      </Code>
      <p>그대로 프로젝트를 빌드 한 후 <em>assets</em> 폴더를 확인해 보면 roboto 폰트가 번들링 된<code>.woff</code> 파일을 확인할 수 있습니다.</p>
      <div class="text-center">
        <img src="@/assets/images/tip/performance/font.jpg" class="img" />
      </div>
      <p></p>
      <p>6개의 파일들의 크기를 합쳐보면 <strong>120KB</strong> 정도로 큰 용량은 아니지만 <strong>네트워크 환경이 원활하지 못한 경우 폰트의 로딩이 지연되면 페이지 렌더링 시 텍스트가
          깨져 보이는
          문제</strong>가 발생할 수
        있습니다. 해당 부분의 코드를 주석 처리하거나 제거하면 120KB만큼 용량이 절약됩니다.
      </p>
      <Info advice color="teal-4">
        <p>배포 서버의 성능이 좋다면 굳이 비활성 할 필요는 없습니다. <strong>가독성</strong>도 웹에서는 중요한 요소 중 하나이니까요.
        </p>
        <ul>
          <li>Sera's Quasar에서는 Roboto font를 기본 폰트로 사용중입니다 :)</li>
        </ul>
      </Info>
    </section>
    <section id="icon" data-name="기본 아이콘 팩 해제">
      <Title sub>기본 아이콘 팩 해제</Title>
      <p>
        <Link href="https://vitejs.dev/" color="deep-purple-6">Vite</Link> 플러그인 용 Quasar 사용 시 기본적으로 사용되는 아이콘 팩을
        설정할 수 있습니다. Quasar에서 제공하는
        <Link href="https://quasar.dev/start/vite-plugin#using-quasar">Configurator</Link>를 통해 사용자의 입맛대로 설정할 수 있습니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{ 'javascript': 'js' }">
        <textarea readonly>
// main.js

import &#123; createApp &#125; from 'vue'
{{ 'import &#123; Quasar &#125; from \'quasar\'' }}

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css' // 이곳

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, &#123;
  plugins: &#123;&#125;, // import Quasar plugins and add here
&#125;)

// Assumes you have a &#60;div id="app"&#62;&#60;/div&#62; in your index.html
myApp.mount('#app')
        </textarea>
      </Code>
      <p>Quasar에서 제공하는
        <Link href="https://quasar.dev/vue-components">Vue Component</Link>에 사용되는 수많은 아이콘들은 위에서 지정한 아이콘 팩을 기준으로 표시됩니다.
        평균적으로 가장 많이 사용되는 <em>Material Icons</em>을 기본 아이콘 팩으로 지정하고 프로젝트를 빌드 해보도록 하겠습니다. 기본 폰트를 지정할 때와 마찬가지로 2개의
        <code>.woff</code> 파일이 번들링 됩니다.
      </p>
      <div class="text-center">
        <img src="@/assets/images/tip/performance/icon.jpg" class="img" />
      </div>
      <p></p>
      <p>2개의 파일들의 크기를 합쳐보면 <strong>280KB</strong> 정도로 어느정도 용량을 차지합니다. 해당 부분의 코드를 주석 처리하거나 제거하면 280KB만큼 용량이 절약됩니다.
        <strong>하지만! </strong>
        <em>Quasar Vue Component</em> 내부에서 사용되는 모든 아이콘이 정상적으로 표시되지 않으며, 필요한 경우 따로 아이콘을 지정하거나 표시되지 않도록
        설정해 줘야만 하는
        불편함이 발생합니다. 성능을 얻고 편리함을 잃게 됨 :(
      </p>
      <Info advice color="teal-4">
        <p>폰트와 마찬가지로 배포 서버의 성능이 좋다면 굳이 비활성 할 필요는 없습니다. 아이콘을 따로 설정해서 사용하는게 굉장히 번거롭거든요.
        </p>
        <ul>
          <li>Sera's Quasar에서는 Material Icons를 기본 아이콘 팩으로 사용중입니다 :)</li>
        </ul>
      </Info>
    </section>
  </div>
</template>
<style scoped>
.img {
  box-shadow: 0 0 0 1px var(--q-primary);
}
</style>