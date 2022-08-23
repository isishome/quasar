<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>다크 모드</Title>
      <p>
        다크 모드는 UI의 많은 부분을 어둡게 표시하는 데 사용되는 일종의 보조 모드입니다. 이 디자인은 가독성에 필요한 최소 색상 대비 비율을 유지하고 디바이스 화면에 밝은 부분을 줄여줍니다.
      </p>
      <p>다크 모드의 장점은 다음과 같습니다.</p>
      <ul>
        <li>눈의 피로를 줄여 시력을 보호해 줍니다.</li>
        <li>야간이나 어두운 환경에서 사용 편의를 제공합니다.</li>
        <li>OLED 또는 AMOLED 디바이스 스크린의 배터리 전원을 절약하여 충전 없이 더 오랜 시간 디바이스를 사용할 수 있습니다.</li>
      </ul>
      <Info advice color="teal-4">
        <p>최근 어두운 테마는 대부분의 웹사이트에서 기본적으로 제공하는 기능으로 자리 잡고 있습니다. Quasar에서는 대부분의 컴포넌트에 다크 모드를 적용하여 간단한 설정 변경만으로도 어두운 UI를 손쉽게
          사용할 수 있도록 제공합니다.</p>
      </Info>
    </section>
    <section id="what" data-name="용도">
      <Title sub>용도</Title>
      <ol>
        <li>페이지( <code>body.body---dark</code> 선택자로 CSS를 통해 쉽게 재정의 가능)의 기본 어두운 배경을 설정합니다.</li>
        <li><code>dark</code> 속성이 있는 모든 컴포넌트는 자동으로 <code>true</code>로 설정됩니다. 수동설정이 필요 없습니다.</li>
      </ol>
      <p>자동 감지는 <code>prefers-color-scheme: dark</code> 미디어 쿼리를 보고 작동하며 동적으로 실행됩니다. 앱이 실행되는 동안 클라이언트 브라우저/플랫폼이 다크 모드를
        활성/비활성으로 변경하면 Quasar의 다크 모드가 업데이트됩니다.(다크 모드가 <code>auto</code>로 설정된 경우)
      </p>
    </section>
    <section id="how" data-name="사용법">
      <Title sub>사용법</Title>
      <p>
        <Link>다크 플러그인</Link>을 통해 다크 모드와 라이트 모드(기본값)를 쉽게 전환할 수 있습니다.
      </p>
    </section>
    <section id="style" data-name="앱 스타일 지정 방법">
      <Title sub>앱 스타일 지정 방법</Title>
      <p>앱이 다크 모드에 있거나 그렇지 않을 수도 있기 때문에 <code>body</code> 태그에 연결된 CSS 클래스(<code>body--light</code> 또는
        <code>body--dark</code>)를 활용하여
        쉽게 스타일을 지정할 수 있습니다. <b>두 가지 모드를 모두 지원하길 원한다면 말이죠</b>.
      </p>
      <Code class="q-mb-lg" language="css">
        <textarea readonly>
.body--light &#123;
  /* ... */
&#125;

.body--dark &#123;
  /* ... */
&#125;
        </textarea>
      </Code>
      <p>기본 다크 모드 페이지 배경색을 재정의 하려는 경우:</p>
      <Code class="q-mb-lg" language="css">
        <textarea readonly>
body.body--dark &#123;
  background: #000
&#125;
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="색상 팔레트" prev :to="{ name: 'color' }" />
        <Move label="간격" next :to="{ name: 'spacing' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

.noto-sans {
  font-family: 'Noto Sans KR', sans-serif;
}

.q-hoverable:deep(.q-focus-helper) {
  display: none;
}

.toggle {
  box-shadow: 0 0 0 1px var(--q-primary);
}
</style>