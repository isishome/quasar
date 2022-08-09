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
        <li>백엔드 프레임워크와의 통합을 포함한 자세한 도구 세부 정보는 도구 가이드에서 설명합니다.</li>
        <li>기본 빌드 도구 Vite에 대해 자세히 알아보려면 Vite 문서를 확인하세요.</li>
        <li>TypeScript를 사용하기로 선택한 경우 TypeScript 사용 가이드를 확인하십시오.</li>
      </ul>
      <p>
        앱을 배포할 준비가 되면 다음을 실행합니다:
      </p>
      <Code class="q-my-lg" language="bash">
        <textarea readonly>
&#62; npm run build
        </textarea>
      </Code>
      <p>
        그러면 프로젝트의 ./dist 디렉토리에 프로덕션 준비가 된 앱 빌드가 생성됩니다. 프로덕션 배포 가이드를 확인하여 앱을 프로덕션으로 배포하는 방법에 대해 자세히 알아보세요.
      </p>
    </section>
    <section id="quasar" data-name="퀘이사 플러그인 설치">
      <div class="text-h5 text-primary text-weight-bold q-mt-xl q-pt-lg">
        퀘이사 플러그인 설치
      </div>
      <q-separator />
      <p class="q-mt-md">기본적으로 제공되는 단순함과 강력한 기능으로 CLI를 포함해 퀘이사는 개발을 더 쉽게 할 수 있도록 많은 기능들을 포함하고 있습니다.
      </p>
      <div class="note">
        <p><strong>생각할 거리</strong></p>
        <p>퀘이사는 미래를 내다보고 있으며 자체적으로 높고 현대적인 기준을 세우고 있습니다. 그리고 웹 개발의 진전을 위해 현재의 틀에서 벗어나야 합니다. 그렇지 않으면, cgi-bin / perl을
          계속해서
          사용해야 할지 모릅니다. 왜냐하면 개발자들에게 그것은 오랫동안 익숙한 것이었기 때문입니다. 그러나 대부분의 개발자가 오랫동안 그것에 익숙해졌다는 것이 최고의 솔루션이나 "분명한" 솔루션을
          의미하는
          것은 아니며, 퀘이사가 높은 품질의 작업에 대한 최적의 경로나 심지어 돈이 되지 않는다고 믿는다 해도 그 선택을 바꾸지 않을 것입니다.</p>
        <i>우리가 퀘이사로 달성하고자 하는 것은 전체적인 웹 개발 기준을 높이는 것입니다. 앞으로 전진하세요. 그리고 진화하세요. 생각을 바꾸세요. 더 나은 대안이 있을 때 지적하세요.</i>

      </div>
      <p class="text-caption">
        아래는 퀘이사의 유용한 부분과 특징을 일부 나열한 것입니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>신뢰할 수 있는 소스코드 하나로 모든 플랫폼을 동시에 한 번에</div>
      </div>
      <p>신뢰할 수 있는 소스코드 하나로 모든 플랫폼을 동시에 한 번에 : 반응형 데스크톱/모바일 웹사이트(SPA, SSR + SPA 클라이언트 테이크 오버, SSR + PWA 클라이언트 테이크 오버),
        PWAs (프로그레시브 웹 앱), 모바일 앱(네이티브 같은) 및 멀티 플랫폼 데스크톱 앱(Electron 사용)</p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>빠르고 응답성이 뛰어난 최고 수준의 웹 컴포넌트 세트</div>
      </div>
      <p>퀘이사에는 거의 모든 웹 개발에 필요한 컴포넌트가 있습니다. 각 퀘이사 컴포넌트들은 사용자에게 최상의 경험을 제공하기 위해 세심하게 제작되었습니다. 퀘이사는 <strong>성능과 응답성을 염두에
          설계</strong>되었기 때문에
        퀘이사 사용에 따른 오버헤드를 찾아보기 어렵습니다. 이런 성능과 좋은 디자인이 여러분에게 특별한 자부심을 줄 것입니다.</p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>최적의 예제를 기본적으로 포함</div>
      </div>
      <p>또한 퀘이사는 개발자들이 최적의 예제를 따라 할 수 있도록 만들어졌습니다. 이를 위해 퀘이사는 <strong>특별한 설정 없이</strong> 바로 사용 가능한 훌륭한 기능들로 채워져있습니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>웹 확장 지원</div>
      </div>
      <p>퀘이사 웹 확장은 복잡한(또는 간단한) 설정을 웹사이트/앱에 손쉽게 더해줄 수 있는 방법입니다. 이것은 더 커뮤니티에 기여하고 속도를 높이는 데 도움이 되는 방법이기도 합니다. <strong>개발
          패턴은 말 그대로
          퀘이사를 가장 확장성 있고 강력한 프레임워크</strong>(- 사용자의 상상력과 혁신으로 이루어진)<strong>를 만들기 위한 포문을 열어줍니다.</strong></p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>RTL 완벽 지원</div>
      </div>
      <p>퀘이사의 컴포넌트들과 개발자가 작성한 코드 모두에 RTL(오른쪽에서 왼쪽으로)을 지원합니다. 개발자가 작성한 웹사이트/앱 CSS 코드는 RTL 언어팩을 사용하는 경우 자동으로 RTL로 변환됩니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>기존 프로젝트를 점진적으로 마이그레이션</div>
      </div>
      <p>퀘이사는 UMD(Unified Module Definition) 버전을 제공합니다. 이는 개발자가 CSS 및 JS, HTML 태그를 기존 프로젝트에 추가하고 사용할 준비가 되었음을 의미합니다.
        따로
        빌드 단계가 필요하지 않습니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>재사용 가능성이 아닌 기능에 집중</div>
      </div>
      <p>개발자는 퀘이사 CLI를 사용한 최고 수준의 프로젝트 초기화를 통해 손쉽게 시작해 볼 수 있습니다. 짧은 시간에 아이디어를 실물로 표현할 수 있습니다. 다시 말해 퀘이사가 무거운 작업을 대신
        처리하므로
        재사용 가능성이 아닌 기능에만 집중하면 됩니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>테스트 & 검사 자동화</div>
      </div>
      <p>퀘이사 프로젝트는 단위 및 종단 테스트 자동화뿐 아니라 제품 품질 증대 및 보안 검사 도구 제품군을 추가할 수 있습니다. 이 모든 것들은 웹사이트/앱이 최고의 품질이 가능하도록 해줍니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>끊임없이 성장하는 커뮤니티</div>
      </div>
      <p>개발자가 해결할 수 없는 문제가 발생하면 <a href="https://forum.quasar.dev/" target="_blank" rel="noopener noreferrer">퀘이사
          포럼
          <q-icon name="open_in_new" />
        </a>이나 <a href="https://chat.quasar.dev/" target="_blank" rel="noopener noreferrer">디스코드 대화 서버
          <q-icon name="open_in_new" />
        </a>를 방문할 수 있습니다.
        커뮤니티는 언제나 도움이 될
        것입니다. <a href="https://twitter.quasar.dev/" target="_blank" rel="noopener noreferrer">트위터
          <q-icon name="open_in_new" />
        </a>를 팔로우 해서 새 버전 및 기능에 대한
        업데이트
        소식을 받을 수도 있습니다. <a href="https://donate.quasar.dev/" target="_blank" rel="noopener noreferrer">후원자/광고주
          <q-icon name="open_in_new" />
        </a>로서 특별한 서비스를 받을 수도 있고 퀘이사는 앞으로도 여러분들과 관계를 유지하며 돕도록 하겠습니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>광범위한 플랫폼 지원</div>
      </div>
      <p>구글 크롬, 파이어폭스, 엣지, 사파리, 오페라, iOS, 안드로이드, 맥OS, 리눅스, 윈도우
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>퀘이사 언어 팩</div>
      </div>
      <p>퀘이사는 기본적으로 40개 이상의 언어팩을 갖추고 있습니다. 또한 언어팩이 누락된 경우 추가하는 데 5분밖에 걸리지 않습니다.
      </p>
      <div class="text-h6 text-primary q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap">
        <q-icon name="keyboard_double_arrow_right" />
        <div>훌륭한 문서화</div>
      </div>
      <p>마지막으로 개발자가 퀘이사를 빠르게 선택할 수 있도록 방대하고, 부풀리지 않은 완벽한 문서를 작성하는 데 초점을 두어 많은 시간을 공들였다는 것을 말하고 싶습니다. 문서를 보고 혼란이 생기지
        않도록
        특별히 노력을 기울였습니다.
      </p>
    </section>
    <section id="started" data-name="1분 안에 시작하세요">
      <div class="text-h5 text-primary text-weight-bold q-mt-xl q-pt-lg">
        1분 안에 시작하세요
      </div>
      <q-separator />
      <p class="q-mt-md">이 말을 하고 <router-link :to="{ name: 'start' }">시작</router-link>하고 싶네요! 1분 이내에 웹사이트나 앱을 시작할 수
        있습니다.
      </p>
    </section>
  </div>
</template>
<style scoped>
p {
  word-break: keep-all;
}

a {
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