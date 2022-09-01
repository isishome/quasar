<script setup>
import { defineAsyncComponent, } from 'vue'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>준비하기
      </Title>
      <p>이 자습서를 통해 <b>멤버 관리 페이지</b>를 만들어 보려고 합니다. Grid Box를 이용한 카드 배치부터 Card의 내용을 수정, 저장 및 다양한 컴포넌트를 사용하여 Quasar로 앱을
        만드는
        기본적인 사항들을
        배워보도록 하겠습니다.</p>
      <Note>
        <p><b>팁</b></p>
        <p>Card 컴포넌트를 사용한다고 해서 미리 Card 컴포넌트를 공부할 필요는 없습니다. 여기서 다루지 않는 컴포넌트의 또 다른 기능이 필요하지 않다면 말이죠. 미리 걱정할 필요 없습니다. 특정
          <em>props</em>나 <em>methods</em>의 확인이 필요할 땐
          <Link href="https://quasar.dev/">Quasar 공식 문서</Link>를 참고하면 되니까요!
        </p>
      </Note>
    </section>
    <section id="set" data-name="환경 설정">
      <Title sub>환경 설정
      </Title>
      <Title minor>Vue.js & Quasar Vite Plugin 설치</Title>
      <p>
        <Link :to="{ name: 'start' }">
        시작하기</Link> 섹션을 참고하여 Vue.js 와 Quasar Vite Plugin을 설치해 주세요.
      </p>
      <Title minor>Quasar Session Storage 플러그인 설정</Title>
      <p>데이터를 다루기 위해 Quasar 플러그인 중 <code>SessionStorage</code>를 사용할 계획입니다. <b class="text-primary">Sera's Quasar</b>에선
        따로 다루지 않을 만큼
        간단한 플러그인이기 때문에 자습서를 진행하면서 익혀보도록 하겠습니다. 먼저 아래와 같이 <em>main.js</em> 파일을 수정해서 미리 설정하도록 합시다.</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// main.js

{{ 'import &#123; Quasar, SessionStorage &#125; from \'quasar\'' }}

app.use(Quasar, &#123;
  plugins: &#123;
    SessionStorage
  &#125;
&#125;)
        </textarea>
      </Code>
      <Title minor>Notify 플러그인 설정</Title>
      <p>멤버의 추가나 수정, 삭제 시 그 처리 결과의 안내를 위해 Notify 플러그인 설정을 추가해줍니다.</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// main.js

{{ 'import &#123; Quasar, SessionStorage, Notify &#125; from \'quasar\'' }}

app.use(Quasar, &#123;
  plugins: &#123;
    SessionStorage,
    Notify
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="시작하기" prev :to="{ name: 'start' }" />
        <Move label="카드 만들기" next :to="{ name: 'card' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>