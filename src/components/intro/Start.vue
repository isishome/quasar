<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="start" data-name="시작하기">
      <div class="text-h4 text-primary text-weight-bold q-py-lg">
        시작하기
      </div>
      <p>
        퀘이사를 사용하는 방법에는 여러 가지가 있지만 여기서는 Vue.js 공식 사이트에 나온 빠른 시작의 가볍고 빠른 빌드 도구인 <a class="text-purple"
          href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite
          <q-icon name="open_in_new" />
        </a> 를 바탕으로 하는 <a href="https://quasar.dev/start/vite-plugin" target="_blank" rel="noopener noreferrer">퀘이사 플러그인
          <q-icon name="open_in_new" />
        </a>을 설치할 예정입니다.
      </p>
      <p class="q-pa-sm text-caption">* 시작하기 챕터에서 사용된 설치 과정은 모두 각 프레임워크 또는 플러그인의
        공식 홈페이지를
        참고하여 작성되었습니다.</p>
      <div class="tip q-my-md q-pt-md q-px-md">
        <div class="row items-center q-gutter-x-xs">
          <q-icon flat name="info" color="green-7" />
          <b>전제 조건</b>
        </div>
        <ul>
          <li>명령줄 익히기</li>
          <li><a class="text-green-9" href="https://nodejs.org/ko/" target="_blank" rel="noopener noreferrer">Node.js
              <q-icon name="open_in_new" />
            </a> 버전 15.0 이상 설치</li>
        </ul>
      </div>
    </section>
    <section id="vuejs" data-name="Vue.js 빠른 시작">
      <div class="text-h5 text-green-7 text-weight-bold q-mt-xl q-pt-lg">
        Vue.js 빠른 시작
      </div>
      <q-separator />
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
          &gt; npm init vue@latest
        </textarea>
      </Code>
      <p>
        이 명령은 공식 Vue 프로젝트 스케 폴딩 도구인 <a href="https://github.com/vuejs/create-vue" class="text-green-7" target="_blank"
          rel="noopener noreferrer">create-vue
          <q-icon name="open_in_new" />
        </a>를 설치하고 실행합니다. TypeScript 및 테스트 지원과 같은 여러
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
        첫 번째 Vue 프로젝트가 실행되었을 것입니다! 생성된 프로젝트의 예제 컴포넌트는 <a class="text-green-7"
          href="https://vuejs.org/guide/introduction.html#options-api" target="_blank" rel="noopener noreferrer">Options
          API
          <q-icon name="open_in_new" />
        </a>가 아닌 <a class="text-green-7" href="https://vuejs.org/guide/introduction.html#composition-api"
          target="_blank" rel="noopener noreferrer">Composition API
          <q-icon name="open_in_new" />
        </a> 와 <em>&#60;script setup&#62;</em>
        을 사용하여 작성되어 있습니다. 몇 가지 추가 팁:
      </p>
      <ul>
        <li>권장되는 IDE 설정은 <a class="text-green-7" href="https://code.visualstudio.com/" target="_blank"
            rel="noopener noreferrer">Visual Studio Code
            <q-icon name="open_in_new" />
          </a> + <a class="text-green-7" href="https://marketplace.visualstudio.com/items?itemName=Vue.volar"
            target="_blank" rel="noopener noreferrer">Volar Extension
            <q-icon name="open_in_new" />
          </a>입니다.</li>
        <li>다른 에디터를 사용하는 경우 <a class="text-green-7" href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
            target="_blank" rel="noopener noreferrer">IDE 지원 섹션
            <q-icon name="open_in_new" />
          </a>을 확인하세요.</li>
        <li>백엔드 프레임워크와의 통합을 포함한 툴링(프로그래밍 도구 설정)의 세부 사항은 <a class="text-green-7"
            href="https://vuejs.org/guide/scaling-up/tooling.html" target="_blank" rel="noopener noreferrer">툴링 가이드
            <q-icon name="open_in_new" />
          </a>에 설명되어 있습니다.</li>
        <li>기본 빌드 도구인 Vite에 대해 자세히 알아보려면 <a class="text-purple" href="https://vitejs.dev/" target="_blank"
            rel="noopener noreferrer">Vite 문서
            <q-icon name="open_in_new" />
          </a>를 확인하세요.</li>
        <li>TypeScript를 선택한 경우 <a class="text-green-7" href="https://vuejs.org/guide/typescript/overview.html"
            target="_blank" rel="noopener noreferrer">TypeScript 사용 가이드
            <q-icon name="open_in_new" />
          </a>를 확인하세요.</li>
      </ul>
      <div class="tip q-my-md q-pt-md q-px-md">
        <div class="row items-center q-gutter-x-xs text-subtitle1">
          <q-icon flat name="info" color="green-7" />
          <b>Composition API와 &lt;script setup&gt;</b>
        </div>
        <ul>
          <li><b>Composition API</b><br />Vue.js 의 옵션을 정의해서 사용(Option API)하는 데신 함수를 가져와 사용하는 방식의 API 세트로,
            여전히 Option API 사용이 가능하지만 되도록이면 Composition API를 사용하시는 것을 추천드립니다.
            현재 대부분의 모듈이나 플러그인 역시 Composition API로 변경되고 있는 추세입니다. <strong>퀘이사 역시 v2부터 모든 예제가 Composition API 형식으로
              변경</strong>되었습니다.
          </li>
          <li class="q-mt-xs"><b>&lt;script setup&gt;</b><br />Single-File Components(SFCs)에 Composition API를 사용하기 위한
            컴파일 구문입니다.
            &lt;script&gt; 안에 setup을 정의하고 사용할 인자들을 따로 return 하지 않아도 되므로 코드가 간결해지고, 타입 스크립트를 사용하기에 용이하며 무엇보다 성능을 향상에 큰
            도움이 됩니다. </li>
        </ul>
      </div>
      <p>
        앱을 배포할 준비가 되면 다음을 실행합니다:
      </p>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
&#62; npm run build
        </textarea>
      </Code>
      <p>
        그러면 프로젝트의 <em>./dist</em> 디렉터리에 프로덕션(클라이언트가 사용할 결과물) 준비가 된 앱 빌드가 생성됩니다. <a class="text-green-7"
          href="https://vuejs.org/guide/best-practices/production-deployment.html" target="_blank"
          rel="noopener noreferrer">프로덕션 배포 가이드
          <q-icon name="open_in_new" />
        </a>를 확인하여 앱을 프로덕션으로 배포하는 방법에 대해 자세히
        알아보세요.
      </p>
    </section>
    <section id="quasar" data-name="퀘이사 플러그인 설치">
      <div class="text-h5 text-primary text-weight-bold q-mt-xl q-pt-lg">
        퀘이사 플러그인 설치
      </div>
      <q-separator />
      <p class="q-mt-md">이제 &#60;your-project-name&#62 폴더로 이동하여 Vite용 퀘이사 플러그인을 설치해보도록 하겠습니다.
      </p>
      <div class="note">
        <p><strong>팁</strong></p>
        <ul>
          <li><em>@quasar/extra</em> 설치는 선택사항입니다. (기본적으로 설치하시는 것을 추천드립니다.)</li>
          <li class="q-mt-xs"><em>sass@1.32.12</em> 역시 Sass/SCSS 를 사용하는 경우에만 설치 하시면 됩니다. (저는 CSS에 익숙하므로 설치하지 않았습니다.)
          </li>
        </ul>
      </div>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
&#62; cd &#60;your-project-name&#62;
&#62; npm install quasar @quasar/extras
&#62; npm install -D @quasar/vite-plugin sass@1.32.12
        </textarea>
      </Code>
    </section>
    <section id="using" data-name="퀘이사 설정하기">
      <div class="text-h5 text-primary text-weight-bold q-mt-xl q-pt-lg">
        퀘이사 설정하기
      </div>
      <q-separator />
      <p class="q-mt-md">퀘이사를 사용하기 앞서 몇가지 설정이 필요합니다.</p>
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
      <p class="text-subtitle1 text-weight-bold">이제 기본적으로 퀘이사를 사용하기 위한 준비가 모두 끝났습니다.</p>
      <p> 이 외에도 부가적으로 사용할 <b>폰트</b>나
        <b>아이콘</b>,
        <b>플러그인</b> 등을 쉽게 구성할 수 있도록 공식
        홈페이지에 <a class="text-primary" href="https://quasar.dev/start/vite-plugin" target="_blank"
          rel="noopener noreferrer">구성 도구
          <q-icon name="open_in_new" />
        </a>를 확인하세요.
      </p>
    </section>
    <div class="q-mt-xl q-pt-xl">
      <div class="row justify-between items-cetner">
        <q-btn no-caps outline color="primary" padding="1em" :to="{ name: 'why' }" style="max-width:45%">
          <div class="column q-gutter-y-sm">
            <div class="row justify-between items-center q-gutter-x-xs no-wrap text-keep">
              <q-icon name="chevron_left" />
              <div class="text-subtitle1 text-weight-bold">
                왜 퀘이사인가?
              </div>
            </div>
            <q-separator />
            <div class="text-caption text-default q-py-md text-keep">
              개발 비용을 대폭 절감할 수 있습니다
            </div>
          </div>
        </q-btn>
        <q-btn no-caps outline color="primary" padding="1em" :to="{ name: 'flexbox' }" style="max-width:45%">
          <div class="column q-gutter-y-sm">
            <div class="row justify-between items-center q-gutter-x-xs no-wrap text-keep">
              <div class="text-subtitle1 text-weight-bold">
                Flexbox 소개
              </div>
              <q-icon name="chevron_right" />
            </div>
            <q-separator />
            <div class="text-caption text-default q-py-md text-keep">
              퀘이사 프레임워크를 시작해봅시다
            </div>
          </div>
        </q-btn>
      </div>
    </div>
  </div>
</template>
<style scoped>
a:not(.q-btn) {
  color: var(--q-primary);
  font-weight: 500;
  text-decoration: none;
  outline: 0;
  border-bottom: 1px dotted currentColor;
  transition: opacity .2s;
  white-space: nowrap;
}

div:deep(.q-video) {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .05) !important;
  background-color: rgba(0, 0, 0, .02);
  position: relative;
}

div:deep(.q-video::after) {
  content: '영상';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, .1);
}
</style>