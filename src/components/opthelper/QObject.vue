<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>$q 객체</Title>
      <p>
        Quasar는 다양한 용도로 사용할 수 있는 <code>$q</code> 객체를 제공합니다. 문서를 통해 확인할 수 있습니다.
      </p>
      <Info advice color="teal-4">
        <p><b>Quasar $q 객체는 웹사이트나 앱을 개발할 때 다양한 곳에 유용하게 사용됩니다.</b></p>
        <ul>
          <li>
            디바이스 너비에 따라 다른 화면 구성을 표시하고 싶을 때
          </li>
          <li>
            각종 Quasar 제공 플러그인을 사용할 때
          </li>
          <li>
            각종 Quasar 제공 유틸을 사용할 때
          </li>
        </ul>
      </Info>
      <Info class="text-caption" color="transparent">
        <p>* Sera's Quasar에서는 <strong>Composition API</strong>와
          <code>&lt;script setup&gt;</code>을
          이용한 사용법만 소개하고 있습니다.
          <br />Option API 사용법은
          <Link href="https://quasar.dev/options/the-q-object">Quasar 공식
          홈페이지</Link>를 참고하세요.
        </p>
      </Info>
      <q-markup-table flat bordered wrap-cells class="text-left">
        <thead>
          <tr>
            <th>속성 명</th>
            <th>유형</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>$q.version</code>
            </td>
            <td>String</td>
            <td>Quasar 버전</td>
          </tr>
          <tr>
            <td>
              <code>$q.platform</code>
            </td>
            <td>Object</td>
            <td>Quasar의 플랫폼과 같은 객체 입니다.</td>
          </tr>
          <tr>
            <td>
              <code>$q.screen</code>
            </td>
            <td>Object</td>
            <td>스크린 플러그인에서 제공하는 객체 입니다.</td>
          </tr>
          <tr>
            <td>
              <code>$q.lang</code>
            </td>
            <td>Object</td>
            <td>레이블 등을 포함하는 Quasar 언어 팩 관리(언어 파일 중 하나). Quasar 컴포넌트를 위해 설계되었지만 앱 컴포넌트에서도 사용할 수 있습니다.
            </td>
          </tr>
          <tr>
            <td>
              <code>$q.iconSet</code>
            </td>
            <td>Object</td>
            <td>Quasar 아이콘 세트 관리(아이콘 세트 파일중 하나) Quasar 컴포넌트를 위해 설계되었지만 앱 컴포넌트에서도 사용할 수 있습니다.</td>
          </tr>
          <tr>
            <td>
              <code>$q.cordova</code>
            </td>
            <td>Object</td>
            <td>Cordova 전역 객체에 대한 참조입니다. Cordova 앱에서 실행되는 경우에만 사용할 수 있습니다.</td>
          </tr>
          <tr>
            <td>
              <code>$q.capacitor</code>
            </td>
            <td>Object</td>
            <td>Capacitor 전역 객체에 대한 참조입니다. Capacitor 앱에서 실행되는 경우에만 사용할 수 있습니다.</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
      <p>
        이번 섹션에서는 .vue 파일 및 외부에서 사용하는 방법에 대해 설명합니다.(Composition API)
      </p>
      <Title minor>.vue 파일에서 사용하기</Title>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;template&#62;
  &#60;div&#62;
    &#60;div v-if="$q.platform.is.ios"&#62;
      iOS 플랫폼에서만 렌더링 됩니다.
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;

&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

console.log($q.platform.is.ios)

// 메서드를 보여주기 위한 예제일 뿐,
// Vue script의 어디든 위치할 수 있습니다.
function show () &#123;
  // Quasar 버전을 출력합니다.
  console.log($q.version)
&#125;
&#60;/script&#62;
        </textarea>
      </Code>
      <Title minor>.vue 파일 외부에서 사용하기</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { Quasar } from \'quasar\'' }}

console.log(Quasar.platform.is.ios)
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Grid Gutter 소개" prev :to="{ name: 'gridgutter' }" />
        <Move label="플랫폼 감지" next :to="{ name: 'platform' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
th {
  font-weight: 700;
}
</style>