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
        또는 모듈, 큰 용량의 내부 폰트, 그리고 운영 서버의 성능 등과 같은 동작 환경에 영향을 받기 때문입니다. 이번 챕터에서는 성능 또는 최적화에 도움이 될만한 몇 가지 팁을 소개해 보도록 하겠습니다.
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
import '@quasar/extras/roboto-font/roboto-font.css' // Roboto font 를 가져옴
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
      <p><em>Roboto font</em>의 기본 사용 설정을 그대로 프로젝트를 빌드 한 후 <em>assets</em> 폴더를 확인해 봅시다. roboto 폰트가 번들링
        된 <code>.woff</code> 파일들을 확인할 수 있습니다.</p>
      <div class="text-center">
        <img src="@/assets/images/tip/performance/font.jpg" class="img" alt="Performance Font" />
      </div>
      <p></p>
      <p>6개의 파일들의 크기를 합치면 <strong>120KB</strong> 정도로 큰 용량은 아니지만 <strong>네트워크 환경이 원활하지 못한 경우 폰트의 로딩이 지연되면 페이지 렌더링 시 텍스트가
          깨져 보이는
          문제</strong>가 발생할 수
        있습니다. 코드를 주석 처리하거나 제거하면 사용자는 폰트 로딩에 소요되는 시간을 절약할 수 있게 됩니다.
      </p>
      <Info advice color="teal-4">
        <p>운영 서버의 성능이 좋고, 디자인적으로나 가독성 등 <strong>기본 폰트가 주는 이점이 많다면</strong> 굳이 사용하지 않을 이유가 없습니다.
        </p>
        <ul>
          <li>Sera's Quasar에서는 Roboto font를 기본 폰트로 사용 중입니다 :)</li>
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
      <p>
        <Link href="https://quasar.dev/vue-components">Quasar Vue Component</Link>에 사용되는 수많은 아이콘들은 위 코드에서 지정한 아이콘 팩을
        기준으로
        표시됩니다.
        평균적으로 가장 많이 사용되는 <em>Material Icons</em>을 기본 아이콘 팩으로 지정하고 프로젝트를 빌드 해보도록 하겠습니다. 기본 폰트를 지정할 때와 마찬가지로 2개의
        <code>.woff</code> 파일로 번들링 됩니다.
      </p>
      <div class="text-center">
        <img src="@/assets/images/tip/performance/icon.jpg" class="img" alt="Performance Icon" />
      </div>
      <p></p>
      <p>2개의 파일들의 크기를 합쳐보면 <strong>280KB</strong>로 일부 용량을 차지합니다. 코드를 주석 처리하거나 제거하면 280KB만큼의 트래픽이 절약될 수 있지만
        <em>Quasar Vue Component</em> 내부에서 사용되는 모든 아이콘이 정상적으로 표시되지 않으며 (아래 이미지 참고), 필요한 경우 따로 아이콘을 지정하거나 표시되지 않도록
        설정이 필요합니다. 성능을 끌어올리는 대신 편리함은 잃게 됩니다 :(
      </p>
      <div class="row justify-center q-gutter-md items-center">
        <div>
          <img src="@/assets/images/tip/performance/icon_before.jpg" class="img" alt="Performance Icon" />
        </div>
        <q-icon name="arrow_forward" size="lg" />
        <div>
          <img src="@/assets/images/tip/performance/icon_after.jpg" class="img" alt="Performance Icon" />
        </div>
      </div>
      <Info advice color="teal-4">
        <p>폰트와 마찬가지로 사용 시 주는 이점이 많다면 굳이 사용하지 않을 필요는 없습니다. 아이콘을 표시하는 컴포넌트를 매번 설정하는 것이 더 비효율적일 수도 있기 때문이죠.
        </p>
        <ul>
          <li>Sera's Quasar에서는 Material Icons를 기본 아이콘 팩으로 사용 중입니다 :)</li>
        </ul>
      </Info>
    </section>
    <section id="viewport" data-name="뷰포트 최적화">
      <Title sub>뷰포트 최적화</Title>
      <p>
        화면에 다이내믹한 효과를 주기 위해 사용하는 다양한 기술이 있습니다. 예를 들어 <code>scroll event</code> 나 <code>resize event</code>,
        <code>intersection observer API</code> 등이 그것인데요. 사용자의 디바이스에 따라 화려하고 부드러운 효과를 보여주기도 하지만, 때로는 불편하고 답답한 경험을 제공하기도
        합니다.
      </p>
    </section>
    <section id="scroll-observer" data-name="Scroll Observer" sub>
      <Title minor>Scroll Observer</Title>
      <p>QScrollObserver는 사용자가 페이지를 스크롤 하거나 <code>.scroll</code> CSS 클래스가 적용된 오버플로된 컨테이너를 스크롤할 때마다 이벤트를 발생시키는 Quasar
        컴포넌트 입니다.</p>
      <p>아래 간단한 QScrollObserver 예제를 확인해 보세요.</p>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': 'vue' }">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
const onScroll = () =&#62; &#123;
  console.log('on scroll')
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="container"&#62;
    &#60;q-scroll-observer @scroll="onScroll" /&#62;
  &#60;/div&#62;
&#60;/template&#62;

&#60;style scoped&#62;
.container &#123;
  height: 200vh;
&#125;
&#60;/style&#62;
        </textarea>
      </Code>
      <div class="text-center q-pb-xl text-caption">
        <u>페이지를 스크롤 하면 'on scroll'이 출력되도록 작성된 예제</u>
      </div>
      <div class="text-center q-pb-xl column">
        <div>
          <img src="@/assets/images/tip/performance/scroll.jpg" class="img" alt="Performance Scroll" />
        </div>
        <div class="text-caption"><u>미세한 스크롤에도 대량의 이벤트(75회)가 호출됨</u></div>
      </div>
      <p>브라우저의 관리자 도구를 확인해 보면 미세한 스크롤에도 모두 로그가 남는 것을 확인할 수 있습니다. 이렇게 과도한
        이벤트가 호출되면 낮은 성능의 디바이스에서 스크립트 오류나 버벅거림 등의 문제가 발생할 수 있으며 이벤트 리스너에 서버 연동 로직이 포함된 경우에는 과도한 요청으로 서버의 성능에도 영향을 끼칠 수
        있습니다.</p>
      <p>이런 과도한 요청으로 인한 문제를 해결하기 위해 Quasar에서는 <code>debounce</code> 컴포넌트 props를 제공합니다. <strong>debounce는 이벤트
          리스너가 호출되지 않고 일정 시간이
          지날 때까지 다시 호출되지 않도록 하며, 지정된 시간이 경과한 경우에만 실행</strong>되도록 합니다.</p>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': 'vue' }">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;q-scroll-observer @scroll="onScroll" debounce="100" /&#62;
        </textarea>
      </Code>
      <div class="text-center q-pb-xl text-caption">
        <u>debounce props에 100(밀리초) 값을 추가</u>
      </div>
      <div class="text-center q-pb-lg column">
        <div>
          <img src="@/assets/images/tip/performance/debounce.jpg" class="img" alt="Performance Debounce" />
        </div>
        <div class="text-caption"><u>같은 스크롤에도 이벤트 호출 횟수가 크게 감소됨(10회)</u></div>
      </div>
      <Info advice color="teal-4">
        <p>
          <code>debounce</code>는 <code>setTimeout</code>과 같이 단순히 동작시간을 지연시켜주는 것과 달리 지정한 시간 안에 이벤트가 다시 호출될 경우 무시됩니다.
        </p>
        <p>예를 들어 debounce 값을 1000(밀리초)으로 설정했을 경우 1초보다 짧은 시간 동안 계속 이벤트를 발생시키더라도 한 번의 이벤트 리스너만 실행됩니다.</p>
      </Info>
    </section>
    <section id="resize-observer" data-name="Resize Observer" sub>
      <Title minor>Resize Observer</Title>
      <p>QResizeObserver는 DOM 요소 / 컴포넌트 요소가 인접한 부모 요소로 정의되었을 때 크기(너비 또는 높이)를 변경할 때마다 이벤트를 발생시키는 Quasar 컴포넌트입니다.</p>
      <p>아래 간단한 QResizeObserver 예제를 확인해 보세요.</p>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': 'vue' }">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
const onResize = () =&#62; &#123;
  console.log('on resize')
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div&#62;
    &#60;q-resize-observer @resize="onResize" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <div class="text-center q-pb-xl text-caption">
        <u>브라우저 또는 DOM 요소의 크기를 변경하면 'on resize'이 출력되도록 작성된 예제</u>
      </div>
      <div class="text-center q-pb-xl column">
        <div>
          <img src="@/assets/images/tip/performance/resize.jpg" class="img" alt="Performance Resize" />
        </div>
        <div class="text-caption"><u>브라우저의 크기가 변경되는 동안 연속적으로 이벤트(8회)가 호출됨</u></div>
      </div>
      <p>QScrollObserver와 마찬가지로 <code>debounce</code> 컴포넌트 props를 제공합니다.</p>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': 'vue' }">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;q-resize-observer @resize="onResize" debounce="1000" /&#62;
        </textarea>
      </Code>
      <div class="text-center q-pb-xl text-caption">
        <u>debounce props에 1000(밀리초) 값을 추가</u>
      </div>
      <div class="text-center column">
        <div>
          <img src="@/assets/images/tip/performance/debounce2.jpg" class="img" alt="Performance Debounce" />
        </div>
        <div class="text-caption"><u>기존과 비슷하게 브라우저 크기를 변경했지만 이벤트가 한 번만 호출됨</u></div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.img {
  box-shadow: 0 0 0 1px var(--q-primary);
}
</style>