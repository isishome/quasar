<script setup>
import { useQuasar } from 'quasar'
import { defineAsyncComponent, computed } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const $q = useQuasar()
const touch = computed(() => $q.platform.has.touch ? '있습니다' : '없습니다')
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
          <Link>스타일 및 Identity > Visibility</Link> 페이지의 CSS 만으로 동일한 효과를 얻을 수 있는 방법을 확인할 수 있습니다. 하지만 이 방법은 플랫폼에 관계없이 DOM
          요소나 컴포넌트를 렌더링 할 것이므로 앱의 성능을 어떻게 처리할지 현명한 선택이 필요합니다.
        </p>
      </Note>
      <p class="q-pa-sm text-caption text-center">* Sera's Quasar에서는 <strong>Composition API</strong>와
        <code>&lt;script setup&gt;</code>
        이용한 사용방법만 소개하고 있습니다.
        <br />Option API 사용법은
        <Link href="https://quasar.dev/options/platform-detection">Quasar 공식
        홈페이지</Link>를 참고하세요.
      </p>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
      <p>
        Vue 컴포넌트 js 내 사용법:
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
import &#123; useQuasar &#125; from "quasar"

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
import &#123; Platform &#125; from "quasar"
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
        이제 코드가 실행되는 플랫폼에 따라 다른 컴포넌트나 DOM 요소를 렌더링 한다고 가정해 보겠습니다. 데스크톱과 모바일 환경에서 서로 다른 무언가가 보이길 원하면 다음과 같이 진행하세요.
      </p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;div v-if="$q.platform.is.desktop"&#62;
  나는 데스크톱 환경에서만 렌더링 됩니다!
&#60;/div&#62;

&#60;div v-if="$q.platform.is.mobile"&#62;
  나는 모바일 환경에서만 렌더링 됩니다!
&#60;/div&#62;

&#60;div v-if="$q.platform.is.electron"&#62;
  나는 Electron 환경에서만 렌더링 됩니다!
&#60;/div&#62;
        </textarea>
      </Code>
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
    이 웹사이트를 보는데 사용 중인 디바이스에는 터치 기능이 &#60;strong&#62;&#123;&#123; touch &#125;&#125;&#60;/strong&#62;.
  &#60;/div&#62;
&#60;/template&#62;

&#60;script setup&#62;
  import &#123; useQuasar &#125; from "quasar"
  import &#123; computed &#125; from 'vue'

  const $q = useQuasar()
  const touch = computed(() =&#62; $q.platform.has.touch ? '있습니다' : '없습니다')
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
          이 웹사이트를 보는데 사용 중인 디바이스에는 터치 기능이 <strong>{{ touch }}</strong>.
        </div>
      </Info>
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