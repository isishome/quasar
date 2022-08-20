<script setup>
import { useQuasar } from 'quasar'
import { defineAsyncComponent, computed } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const $q = useQuasar()
const touch = computed(() => $q.platform.has.touch ? '지원합니다' : '지원하지 않습니다')
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>플랫폼 감지</Title>
      <p>
        Quasar는 코드가 실행되는 컨텍스트 내에서 플랫폼(및 해당기능)을 감지하기 위한 헬퍼가 내장되어 있습니다.
      </p>
      <Note>
        <p><strong>팁</strong></p>
        <p>
          필요한 경우,
          <Link :to="{ name: 'visibility' }">스타일 및 아이덴티티 > 가시성</Link> 페이지의 CSS 만으로 동일한 효과를 얻을 수 있는 방법을 확인할 수 있습니다. 하지만 이
          방법은 플랫폼에
          관계없이 DOM
          요소나 컴포넌트를 렌더링 할 것이므로 앱의 성능을 어떻게 처리할지 현명한 선택이 필요합니다.
        </p>
      </Note>
      <Info class="text-caption" color="transparent">
        <p>* Sera's Quasar에서는 <strong>Composition API</strong>와
          <code>&lt;script setup&gt;</code>
          이용한 사용방법만 소개하고 있습니다.
          <br />Option API 사용법은
          <Link href="https://quasar.dev/options/platform-detection">Quasar 공식
          홈페이지</Link>를 참고하세요.
        </p>
      </Info>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
      <p>
        Vue 컴포넌트 js 내 사용법:
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { useQuasar } from \'quasar\'' }}

setup () &#123;
  const $q = useQuasar()

  $q.platform.is.mobile
&#125;
        </textarea>
      </Code>
      <p>
        Vue 컴포넌트 템플릿 내 사용법:
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
$q.platform.is.cordova
        </textarea>
      </Code>
      <p>
        Vue 컴포넌트 외부에서 사용할 경우 플랫폼 객체를 import 해야 합니다:
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { Platform } from \'quasar\'' }}
        </textarea>
      </Code>
      <p>
        <code>Platform.is</code> 자체는 현재 플랫폼에 대한 세부 정보가 포함된 객체를 반환합니다. 예를 들어 MacOS 데스크톱 컴퓨터에서 Chrome을 실행할 때
        <code>Platform.io</code>는 다음과 유사한 결과를 반환합니다:
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
&#123;
  chrome: true,
  desktop: true,
  mac: true,
  name: "chrome",
  platform: "mac",
  version: "70.0.3538.110",
  versionNumber: 70,
  webkit: true
&#125;
        </textarea>
      </Code>
      <p>
        이제 코드가 실행되는 플랫폼마다 다른 컴포넌트나 DOM 요소를 렌더링 한다고 가정해 보겠습니다. 데스크톱과 모바일 환경에서 서로 다른 뭔가를 보여주길 원한다면 다음과 같이 진행하세요:
      </p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;div v-if="$q.platform.is.desktop"&#62;
  데스크톱 환경에서만 렌더링 됩니다!
&#60;/div&#62;

&#60;div v-if="$q.platform.is.mobile"&#62;
  모바일 환경에서만 렌더링 됩니다!
&#60;/div&#62;

&#60;div v-if="$q.platform.is.electron"&#62;
  Electron 환경에서만 렌더링 됩니다!
&#60;/div&#62;
        </textarea>
      </Code>
    </section>
    <section id="users-device" data-name="사용자의 디바이스" sub>
      <Title minor>사용자의 디바이스</Title>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;template&#62;
  &#60;div class="q-mb-md"&#62;
    Browser User Agent: "&#60;strong&#62;&#123;&#123; $q.platform.userAgent &#125;&#125;&#60;/strong&#62;"
  &#60;/div&#62;
  &#60;q-markup-table flat bordered&#62;
    &#60;thead&#62;
      &#60;tr&#62;
        &#60;th class="text-left"&#62;속성&#60;/th&#62;
        &#60;th class="text-left"&#62;값&#60;/th&#62;
      &#60;/tr&#62;
    &#60;/thead&#62;

    &#60;tbody&#62;
      &#60;tr v-for="(value, prop) in $q.platform.is" :key="prop"&#62;
        &#60;td&#62;&#123;&#123; prop &#125;&#125;&#60;/td&#62;
        &#60;td&#62;&#123;&#123; value &#125;&#125;&#60;/td&#62;
      &#60;/tr&#62;
    &#60;/tbody&#62;
  &#60;/q-markup-table&#62;

  &#60;div class="q-my-md"&#62;
    이 웹사이트를 보는데 사용중인 디바이스에는 터치 기능을 &#60;strong&#62;&#123;&#123; touch &#125;&#125;&#60;/strong&#62;.
  &#60;/div&#62;
&#60;/template&#62;

&#60;script setup&#62;
  {{ 'import { useQuasar } from \'quasar\'' }}
  import &#123; computed &#125; from 'vue'

  const $q = useQuasar()
  const touch = computed(() =&#62; $q.platform.has.touch ? '지원합니다' : '지원하지 않습니다')
&#60;/script&#62;
        </textarea>
      </Code>
      <Info label="결과">
        <div class="q-mb-md">
          Browser User Agent: "<strong>{{ $q.platform.userAgent }}</strong>"
        </div>
        <q-markup-table flat bordered>
          <thead>
            <tr>
              <th class="text-left">속성</th>
              <th class="text-left">값</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(value, prop) in $q.platform.is" :key="prop">
              <td>{{ prop }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </q-markup-table>

        <div class="q-my-md">
          이 웹사이트를 보는데 사용중인 디바이스에는 터치 기능을 <strong>{{ touch }}</strong>.
        </div>
      </Info>
    </section>
    <section id="properties" data-name="속성">
      <Title sub>속성</Title>
      <p>Platform 객체에 다음과 같은 속성을 사용할 수 있습니다(전체 목록은 아님). 자세한 내용은
        <Link href="https://quasar.dev/options/platform-detection#api">Quasar 공식 홈페이지 - API 섹션</Link>을 참고하세요.
      </p>
      <q-markup-table flat bordered wrap-cells class="text-left">
        <thead>
          <tr>
            <th class="text-left">속성</th>
            <th class="text-left">유형</th>
            <th class="text-left">의미</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Platform.is.mobile</code></td>
            <td>Boolean</td>
            <td>코드가 모바일 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.cordova</code></td>
            <td>Boolean</td>
            <td>코드가 Cordova 환경에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.capacitor</code></td>
            <td>Boolean</td>
            <td>코드가 Capacitor 환경에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.nativeMobile</code></td>
            <td>Boolean</td>
            <td>코드가 네이티브 모바일 환경 내에서 실행되고 있는지 여부(<em>Cordova</em>/<em>Capacitor</em>)?</td>
          </tr>
          <tr>
            <td><code>Platform.is.nativeMobileWrapper</code></td>
            <td>String</td>
            <td>네이티브 모바일 환경 명(<code>'cordova'</code>, <code>'capacitor'</code>,
              or <code>undefined</code>)</td>
          </tr>
          <tr>
            <td><code>Platform.is.electron</code></td>
            <td>Boolean</td>
            <td>코드가 Electron 환경에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.desktop</code></td>
            <td>Boolean</td>
            <td>코드가 데스크톱 브라우저에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.bex</code></td>
            <td>Boolean</td>
            <td>코드가 브라우저 확장에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.android</code></td>
            <td>Boolean</td>
            <td>앱이 안드로이드 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.blackberry</code></td>
            <td>Boolean</td>
            <td>앱이 블랙베리 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.cros</code></td>
            <td>Boolean</td>
            <td>앱이 크롬 OS를 사용하는 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.ios</code></td>
            <td>Boolean</td>
            <td>앱이 iOS 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.ipad</code></td>
            <td>Boolean</td>
            <td>앱이 아이패드에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.iphone</code></td>
            <td>Boolean</td>
            <td>앱이 아이폰에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.ipod</code></td>
            <td>Boolean</td>
            <td>앱이 아이팟에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.kindle</code></td>
            <td>Boolean</td>
            <td>앱이 킨들 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.linux</code></td>
            <td>Boolean</td>
            <td>코드가 리눅스 OS를 사용하는 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.mac</code></td>
            <td>Boolean</td>
            <td>코드가 MacOS OS를 사용하는 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.win</code></td>
            <td>Boolean</td>
            <td>코드가 Window OS를 사용하는 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.winphone</code></td>
            <td>Boolean</td>
            <td>코드가 Window Phone 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.playbook</code></td>
            <td>Boolean</td>
            <td>코드가 블랙베리 플레이북 디바이스에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.silk</code></td>
            <td>Boolean</td>
            <td>코드가 킨들 실크 브라우저에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.chrome</code></td>
            <td>Boolean</td>
            <td>코드가 구글 크롬 브라우저 안에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.opera</code></td>
            <td>Boolean</td>
            <td>코드가 오페라 브라우저 안에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.safari</code></td>
            <td>Boolean</td>
            <td>코드가 애플 사파리 브라우저 안에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.edge</code></td>
            <td>Boolean</td>
            <td>코드가 엣지 브라우저 안에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.is.ie</code></td>
            <td>Boolean</td>
            <td>코드가 마이크로소프트 인터넷 익스플로러 브라우저 안에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.has.touch</code></td>
            <td>Boolean</td>
            <td>코드가 터치 스크린에서 실행되고 있는지 여부</td>
          </tr>
          <tr>
            <td><code>Platform.within.iframe</code></td>
            <td>Boolean</td>
            <td>코드가 IFRAME에서 실행되고 있는지 여부</td>
          </tr>
        </tbody>
      </q-markup-table>
      <Note>
        <p><b>팁</b></p>
        <p>모바일 환경에서 실행된다는 것은 이 코드가 Cordova 내부가 아닌 모바일 디바이스(전화 또는 태블릿)에서 실행될 수 있다는 것을 의미합니다.</p>
      </Note>
    </section>
    <section id="ssr" data-name="SSR에 관한 참고사항">
      <Title sub>SSR에 관한 참고사항</Title>
      <p>SSR 용으로 빌드 할 때, <code>$q.platform</code> 형식만 사용할 수 있습니다.
        <code>{{ 'import { Platform } from \'quasar\'' }}</code>(server-side 환경일 때)를 사용해야 하는 경우 다음과 같이 사용해야 합니다.
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { useQuasar } from \'quasar\'' }}

// `ssrContext`에 접근이 필요합니다
function (ssrContext) &#123;
  const platform = process.env.SERVER
    ? Platform.parseSSR(ssrContext)
    : Platform // 그렇지 않으면 클라이언트가 됩니다

  //  platform은 non-SSR 빌드에 global import 와 동일합니다
&#125;
        </textarea>
      </Code>
      <p><code>ssrContext</code>는
        <Link href="https://quasar.dev/quasar-cli-vite/boot-files">@quasar/app-vite Boot File</Link> 또는
        <Link href="https://quasar.dev/quasar-cli-webpack/boot-files">@quasar/app-webpack Boot File</Link>에서 사용할 수 있습니다.
        또한
        <Link href="https://quasar.dev/quasar-cli-vite/prefetch-feature">@quasar/app-vite preFetch</Link> 또는
        <Link href="https://quasar.dev/quasar-cli-webpack/prefetch-feature">@quasar/app-webpack preFetch</Link> 기능에서
        매개변수로
        제공됩니다.
      </p>
      <p>이 모든 것이 클라이언트 전용 앱에서 모든 사용자가 브라우저의 새로운 앱 인스턴스를 사용하기 때문입니다. server-side 렌더링에 대해서도 동일한 것을 원하는 것에 대해:각 요청에는 교차 요청
        상태 오염이 발생하지
        않도록 새로운 격리 앱 인스턴스를 필요로 합니다. 따라서 Platform은 각 요청에 별도로 바인딩 되어야 합니다.</p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="$q 객체" prev :to="{ name: 'qobject' }" />
        <Move label="스크린 플러그인" next :to="{ name: 'screen' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
th {
  font-weight: 700;
}
</style>