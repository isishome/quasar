<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>시작하기</Title>
      <p>
        Quasar를 사용하는 방법에는 여러 가지가 있지만 여기서는 Vue.js 공식 사이트에 나온 빠른 시작의 가볍고 빠른 빌드 도구인
        <Link href="https://vitejs.dev/" color="deep-purple-6">Vite</Link>를 바탕으로 하는
        <Link href="https://quasar.dev/start/vite-plugin">Quasar 플러그인</Link>을 설치할 예정입니다.
      </p>
      <p class="q-pa-sm text-caption">* 시작하기 챕터에서 사용된 설치 과정은 모두 각 프레임워크 또는 플러그인의
        공식 홈페이지를
        참고하여 작성되었습니다.</p>
      <Tip label="전제 조건" color="green-7">
        <ul>
          <li>명령줄 익히기</li>
          <li>
            <Link href="https://nodejs.org/ko/" color="green-9">Node.js</Link> 버전 15.0 이상 설치
          </li>
        </ul>
      </Tip>
    </section>
    <section id="vuejs" data-name="Vue.js 빠른 시작">
      <Title sub color="green-7">Vue.js 빠른 시작</Title>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
          &gt; npm init vue@latest
        </textarea>
      </Code>
      <p>
        이 명령은 공식 Vue 프로젝트 스케 폴딩 도구인
        <Link href="https://github.com/vuejs/create-vue" color="green-7">create-vue
        API</Link>를 설치하고 실행합니다. TypeScript 및 테스트 지원과 같은 여러
        선택적
        기능에 사용 여부가 표시됩니다:
      </p>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
Need to install the following packages:
  create-vue@latest
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

&#8730; Project name: ... &#60;your-project-name&#62;
&#8730; Add TypeScript? ... No / Yes
&#8730; Add JSX Support? ... No / Yes
&#8730; Add Vue Router for Single Page Application development? ... No / Yes
&#8730; Add Pinia for state management? ... No / Yes
&#8730; Add Vitest for Unit Testing? ... No / Yes
&#8730; Add Cypress for both Unit and End-to-End testing? ... No / Yes
&#8730; Add ESLint for code quality? ... No / Yes

Scaffolding project in ./&#60;your-project-name&#62;...

Done. Now run:

  cd &#60;your-project-name&#62;
  npm install
  npm run dev

&#62;
        </textarea>
      </Code>
      <p>
        옵션에 대해 잘 모르는 경우 엔터키를 눌러 <em>No(아니오)</em>를 선택하세요. 프로젝트가 생성되면 안내에 따라 의존성 모듈들을 설치하고 개발 서버를 시작합니다:
      </p>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
&#62; cd &#60;your-project-name&#62;
&#62; npm install
&#62; npm run dev
        </textarea>
      </Code>
      <p>
        첫 번째 Vue 프로젝트가 실행되었을 것입니다! 생성된 프로젝트의 예제 컴포넌트는
        <Link href="https://vuejs.org/guide/introduction.html#options-api" color="green-7">Options
        API</Link>가 아닌
        <Link href="https://vuejs.org/guide/introduction.html#composition-api" color="green-7">Composition API</Link>와
        <em>&#60;script setup&#62;</em>
        을 사용하여 작성되어 있습니다. 몇 가지 추가 팁:
      </p>
      <ul>
        <li>권장되는 IDE 설정은
          <Link href="https://code.visualstudio.com/" color="green-7">Visual Studio Code</Link> +
          <Link href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" color="green-7">Volar Extension
          </Link>입니다.
        </li>
        <li>다른 에디터를 사용하는 경우
          <Link href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" color="green-7">IDE 지원 섹션
          </Link>을 확인하세요.
        </li>
        <li>백엔드 프레임워크와의 통합을 포함한 툴링(프로그래밍 도구 설정)의 세부 사항은
          <Link href="https://vuejs.org/guide/scaling-up/tooling.html" color="green-7">툴링 가이드
          </Link>에 설명되어 있습니다.
        </li>
        <li>기본 빌드 도구인 Vite에 대해 자세히 알아보려면
          <Link href="https://vitejs.dev/" color="deep-purple-6">Vite 문서
          </Link>를 확인하세요.
        </li>
        <li>TypeScript를 선택한 경우
          <Link href="https://vuejs.org/guide/typescript/overview.html" color="green-7">TypeScript 사용 가이드
          </Link>를 확인하세요.
        </li>
      </ul>
      <Tip advice color="teal-4">
        <p><b>Composition API와 &lt;script setup&gt;</b></p>
        <ul>
          <li><b>Composition API</b><br />Vue.js 의 옵션을 정의해서 사용(Option API)하는 데신 함수를 가져와 사용하는 방식의 API 세트로,
            여전히 Option API 사용이 가능하지만 되도록이면 Composition API를 사용하시는 것을 추천드립니다.
            현재 대부분의 모듈이나 플러그인 역시 Composition API로 변경되고 있는 추세입니다. <strong>Quasar 역시 v2부터 모든 예제가 Composition API 형식으로
              변경</strong>되었습니다.
          </li>
          <li><b>&lt;script setup&gt;</b><br />Single-File Components(SFCs)에 Composition API를 사용하기 위한
            컴파일 구문입니다.
            &lt;script&gt; 안에 setup을 정의하고 사용할 인자들을 따로 return 하지 않아도 되므로 코드가 간결해지고, 타입 스크립트를 사용하기에 용이하며 무엇보다 성능을 향상에 큰
            도움이 됩니다. </li>
        </ul>
      </Tip>
      <p>
        앱을 배포할 준비가 되면 다음을 실행합니다:
      </p>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
&#62; npm run build
        </textarea>
      </Code>
      <p>
        실행하면 프로젝트의 <em>./dist</em> 디렉터리에 프로덕션(클라이언트가 사용할 결과물) 준비가 된 앱 빌드가 생성됩니다.
        <Link href="https://vuejs.org/guide/best-practices/production-deployment.html" color="green-7">프로덕션 배포 가이드
        </Link>를 확인하여 앱을 프로덕션으로 배포하는 방법에 대해 자세히
        알아보세요.
      </p>
    </section>
    <section id="quasar" data-name="Quasar 플러그인 설치">
      <Title sub>Quasar 플러그인 설치</Title>
      <p>이제 &#60;your-project-name&#62 폴더로 이동하여 Vite용 Quasar 플러그인을 설치해보도록 하겠습니다.
      </p>
      <Tip advice color="teal-4">
        <ul>
          <li><em>@quasar/extra</em> 설치는 선택사항입니다. (기본적으로 설치하시는 것을 추천드립니다.)</li>
          <li><em>sass@1.32.12</em> 역시 Sass/SCSS 를 사용하는 경우에만 설치 하시면 됩니다. (저는 CSS에 익숙하므로 설치하지 않았습니다.)
          </li>
        </ul>
      </Tip>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
&#62; cd &#60;your-project-name&#62;
&#62; npm install quasar @quasar/extras
&#62; npm install -D @quasar/vite-plugin sass@1.32.12
        </textarea>
      </Code>
    </section>
    <section id="using" data-name="Quasar 설정하기">
      <Title sub>Quasar 설정하기</Title>
      <p>Quasar를 사용하기 앞서 몇가지 설정이 필요합니다.</p>
      <Tip advice color="teal-4">
        <ul>
          <li>프로젝트 폴더 안의 <em>/src/main.js</em> 과 <em>/vite.config.js</em>에 Quasar와 관련 설정 코드 수정이 필요합니다.</li>
        </ul>
      </Tip>
      <Code class="q-my-lg" language="javascript">
        <textarea readonly>
// main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

createApp(App).use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
}).mount('#app')
        </textarea>
      </Code>
      <Code class="q-my-lg" language="javascript">
        <textarea readonly>
// vite.config.js

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
        </textarea>
      </Code>
      <p class="text-subtitle1 text-weight-bold">이제 기본적으로 Quasar를 사용하기 위한 준비가 모두 끝났습니다.</p>
      <p>이 외에도 부가적으로 사용할 <b>폰트</b>나
        <b>아이콘</b>,
        <b>플러그인</b> 등을 쉽게 구성할 수 있도록 공식
        홈페이지에
        <Link href="https://quasar.dev/start/vite-plugin#using-quasar">구성 도구</Link>를 확인하세요.
      </p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="왜 Quasar인가?" prev :to="{ name: 'why' }" />
        <Move label="Flexbox 소개" next :to="{ name: 'flexbox' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>