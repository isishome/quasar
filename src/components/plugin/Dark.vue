<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>다크 플러그인
      </Title>
      <Note>
        <p><b>팁</b></p>
        <p>이 Quasar 플러그인이 잘 이해가 되지 않는다면 스타일 및 아이덴티티에
          <Link :to="{ name: 'darkmode' }">다크 모드</Link> 페이지로 이동하세요.
        </p>
      </Note>
      <Info advice color="teal-4">
        <p>Quasar 내에서 어두운 테마를 사용하도록 도와주는 플러그인입니다. 요즘은 대부분의 사이트가 <b>다크 모드를 기본적으로 지원</b>하고 있으니 한번은 꼭 읽어보세요!</p>
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
      <Note color="orange-4">
        <p><b>주의</b></p>
        <p>아래에 <em>isActive</em> 또는 <em>mode</em>에 수동으로 값을 할당하지 마세요. 그대신 <em>set(val)</em> 메서드를 사용하세요.</p>
      </Note>
    </section>
    <section id="inside" data-name="Vue 파일에서 사용하기" sub>
      <Title minor>Vue 파일에서 사용하기</Title>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

// 현재 사용 여부 가져오기
console.log($q.dark.isActive) // true, false

// 현재 설정된 상태 가져오기
console.log($q.dark.mode) // "auto", true, false

// 상태 설정하기
$q.dark.set(true) // or false or "auto"

// 토글
$q.dark.toggle()
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="outside" data-name="Vue 파일에서 사용하기" sub>
      <Title minor>Vue 파일 외부에서 사용하기</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { Dark } from \'quasar\'' }}

// 현재 사용 여부 가져오기
console.log(Dark.isActive)

// 현재 설정된 상태 가져오기
console.log(Dark.mode) // "auto", true, false

// 상태 설정하기
Dark.set(true) // or false or "auto"

// 토글
Dark.toggle()
        </textarea>
      </Code>
    </section>
    <section id="main" data-name="main.js를 통해 사용하기" sub>
      <Title minor>main.js를 통해 사용하기</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// 파일: main.js

const app = createApp(app)
app.use(Quasar, &#123;
  config: &#123;
    dark: 'auto' // 또는 불린 값 true/false
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="ssr" data-name="SSR에 관한 참고사항">
      <Title sub>SSR에 관한 참고사항</Title>
      <p>SSR 빌드 시:</p>
      <ul>
        <li>다크 모드 사용을 위한 <code>{{ 'import { Dark } from \'quasar\'' }}</code>는 오류가 발생하지 않지만 작동하지 않습니다 (아무것도 하지 않음). 그러나
          다른 두가지 방법을 사용할 수 있습니다 (이전 챕터 참조). quasar.config.js를 통해 사용하는 것을 권장합니다.</li>
        <li>SSR 빌드의 경우 다크 모드를 'auto'로 설정하지 않는 것이 좋습니다. 클라이언트의 다크 모드 기본 설정을 알 수 없기 때문에 SSR은 항상 라이트 모드로 렌더링 한 다음 클라이언트가
          전달받으면 다크 모드로 전환됩니다. 그 결과 화면이 빠르게 깜박입니다.</li>
      </ul>
    </section>
    <section id="watch" data-name="상태 변화 관찰">
      <Title minor>상태 변화 관찰</Title>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;template&#62;...&#60;/template&#62;

&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}
{{ 'import { watch } from \'vue\'' }}

const $q = useQuasar()

watch(() =&#62; $q.dark.isActive, val =&#62; &#123;
  console.log(val ? '다크 모드' : '라이트 모드')
&#125;)
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Cookies" prev :to="{ name: 'cookies' }" />
        <Move label="Loading" next :to="{ name: 'loading' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>