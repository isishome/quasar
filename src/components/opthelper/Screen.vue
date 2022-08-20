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
      <Title head>스크린 플러그인</Title>
      <p>
        Quasar 스크린 플러그인을 사용하면 자바스크립트 코드로 동적이고 반응형인 UI를 다룰 수 있습니다. 가능하면 성능상의 이유로
        <Link href="https://quasar.dev/style/visibility#window-width-related">반응형 CSS 클래스</Link>를 사용하는 것을 추천합니다.
      </p>
      <Info advice color="teal-4">
        <p>왜 스크린 플러그인 대신 <b>반응형 CSS 클래스</b>를 사용하는 게 성능에 이점을 가질까요?</p>
        <p>스크린 플러그인은 디바이스의 너비에 따른 반응형 UI를 가진다고 했습니다. 그 얘긴 UI가 클라이언트에게 보일 수도 또는 보이지 않을 수도 있지만 <strong>렌더링이 되지 않는다는 것은
            아닙니다</strong>. 바꿔 말하면
          스타일 처리로만 가능한 표현을 스크린 플러그인을 사용하게 되면 자바스크립트 코드로 처리되면서 <strong>더 큰 수행 비용(디바이스 자원 소비)</strong>이 소요된다는 얘기가
          됩니다.
        </p>
        <p>플랫폼 감지 헬퍼는 이와 반대입니다. 디바이스에 따라 UI 렌더링이 필요하지 않은 경우에는 반응형 CSS 클래스를 쓰는 것보다 <strong>플랫폼 감지 헬퍼</strong>를 사용하는 것이
          성능에 이점을 가집니다.</p>
      </Info>
    </section>
    <section id="install" data-name="설치">
      <Title sub>설치</Title>
      <p>
        아무것도 할 필요가 없습니다. 스크린 플러그인은 자동으로 설치됩니다.
      </p>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
      <p>아래 <code>$q.screen</code>을 확인하세요. 이것은 간단한 사용법의 예입니다.
      </p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;q-list :dense="$q.screen.lt.md"&#62;
  &#60;q-item&#62;
    &#60;q-item-section&#62;뷔&#60;/q-item-section&#62;
  &#60;/q-item&#62;

  &#60;q-item&#62;
    &#60;q-item-section&#62;제이홉&#60;/q-item-section&#62;
  &#60;/q-item&#62;
&#60;/q-list&#62;
        </textarea>
      </Code>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 컴포넌트 스크립트 부분
{{ 'import { useQuasar } from \'quasar\'' }}
import &#123; computed &#125; from 'vue'

export default &#123;
  setup () &#123;
    const $q = useQuasar()
    const buttonColor = computed(() =&#62; &#123;
      return $q.screen.lt.md
        ? 'primary'
        : 'secondary'
    &#125;)

    return &#123; buttonColor &#125;
  &#125;
&#125;
        </textarea>
      </Code>
      <p>Vue 컴포넌트 외부에서 스크린 플러그인을 사용할 수도 있습니다:</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { Screen } from \'quasar\'' }}

// Screen.gt.md
// Screen.md
// Screen.name ('xs', 'sm', ...)
        </textarea>
      </Code>
    </section>
    <section id="body" data-name="Body 클래스">
      <Title sub>Body 클래스</Title>
      <p><b>Body 클래스를 활성화하면(아래 예제 이후에 수행하는 방법 참고)</b> document.body에 적용된 특정 CSS 클래스 세트를 기반으로 콘텐츠의 스타일 처리를 할 수
        있습니다:<code>screen--xs</code>,
        <code>screen--sm</code>, ..., <code>screen-xl</code>
      </p>
      <Code class="q-mb-lg" language="css">
        <textarea readonly>
body.screen--xs &#123;
  .my-div &#123;
    color: #000;
  &#125;
&#125;

body.screen--sm &#123;
  .my-div &#123;
    color: #fff;
  &#125;
&#125;
        </textarea>
      </Code>
    </section>
    <section id="enable-body" data-name="Body 클래스 활성화" sub>
      <Title minor>Body 클래스를 활성화하는 방법</Title>
      <p>위 동작을 활성화하기 위해 /src/main.js 파일을 다음과 같이 수정하세요. 이 설정으로 '첫 번째 의미 있는 페인트'(FMP) 시간이 약간 증가한다는 점에 유의하세요.</p>
      <Info class="text-caption" color="transparent">
        <p>* Sera's Quasar에서는 <strong>Vite Plugin</strong>
          사용 시 활성화 방법만 소개하고 있습니다.
          <br />그 외 사용법은
          <Link href="https://quasar.dev/options/screen-plugin#how-to-enable-body-classes">Quasar 공식
          홈페이지</Link>를 참고하세요.
        </p>
      </Info>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// 파일: /src/main.js

const app = createApp(app)
app.use(Quasar, &#123;
  config: &#123;
    screen: &#123;
      bodyClasses: true // &#60;&#60;&#60; 이곳에 추가
    &#125;
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="config" data-name="설정">
      <Title sub>설정</Title>
      <p>스크린 플러그인의 작동방식을 변경하는 데 사용할 수 있는 몇가지 메서드가 있습니다.</p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>메서드</th>
            <th>설명</th>
            <th>예제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>setSizes(Object)</td>
            <td>창 중단점을 변경합니다; CSS 중단점을 변경하는 것은 아닙니다.
            </td>
            <td>setSizes({ lg: 1024, xl: 2000 })</td>
          </tr>
          <tr>
            <td>setDebounce(Number)</td>
            <td>기본 100ms 디바운스를 다른 값으로 변경합니다.</td>
            <td>setDebounce(500) // 500ms</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>예제:</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 컴포넌트 내부
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

$q.screen.setSizes(&#123; sm: 300, md: 500, lg: 1000, xl: 2000 &#125;)

// Vue 컴포넌트 외부
{{ 'import { Screen } from \'quasar\'' }}
Screen.setSizes(&#123; sm: 300, md: 500, lg: 1000, xl: 2000 &#125;)
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="플랫폼 감지" prev :to="{ name: 'platform' }" />
        <Move label="Transitions" next :to="{ name: 'transition' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
th {
  font-weight: 700;
}
</style>