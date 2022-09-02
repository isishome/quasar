<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))

const members = reactive([
  { name: '홍길동', team: '디자인 팀', contact: '010-0000-0000' },
  { name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111' },
  { name: '아이유', team: '가수 팀', contact: '010-2222-2222' }
])
</script>

<template>
  <div class="q-px-md text-body2">
    <section>
      <Title head>카드 만들기
      </Title>
      <p>Quasar <em>QCard</em> 컴포넌트를 활용해 간단한 레이아웃을 구성해 보도록 하겠습니다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;template&#62;
  &#60;div class="row"&#62;
    &#60;q-card v-for="c in 10" :key="c"&#62;
      &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
      &#60;q-card-section&#62;
        홍길동
      &#60;/q-card-section&#62;
    &#60;/q-card&#62;
  &#60;/div&#62;
&#60;/template&#62;
  </textarea>
      </Code>
      <b>결과</b>
      <div class="row">
        <q-card>
          <div class="text-center bg-primary text-white">멤버</div>
          <q-card-section>
            홍길동
          </q-card-section>
        </q-card>
      </div>
      <p class="q-py-lg"></p>
      <p>간단한 멤버 카드가 만들어졌습니다. 몇 가지 항목을 추가하고 <code>v-for</code> 디렉티브를 이용해 더 많은 카드를 만들어 봅시다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;template&#62;
  &#60;div class="row"&#62;
    &#60;q-card v-for="c in 10" :key="c"&#62;
      &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
      &#60;q-card-section&#62;
        &#60;div&#62;홍길동&#60;/div&#62;
        &#60;div&#62;디자인 팀&#60;/div&#62;
        &#60;div&#62;010-0000-0000&#60;/div&#62;
      &#60;/q-card-section&#62;
    &#60;/q-card&#62;
  &#60;/div&#62;
&#60;/template&#62;
  </textarea>
      </Code>
      <b>결과</b>
      <div class="row">
        <q-card v-for="c in 8" :key="c">
          <div class="text-center bg-primary text-white">멤버</div>
          <q-card-section>
            <div>홍길동</div>
            <div>디자인 팀</div>
            <div>010-0000-0000</div>
          </q-card-section>
        </q-card>
      </div>
      <p class="q-py-lg"></p>
      <p>8개의 멤버 카드가 만들어졌습니다. 결과물을 보니 간격을 주는 걸 깜박했군요.
        <code>row</code>의 자식 요소에 <code>col</code> 클래스를 추가하지 않았기 때문에
        <Link :to="{ name: 'gridrow', hash: '#intro' }">Grid Row 소개
        </Link>섹션에서 언급했던 12포인트가 아직 적용되지 않았습니다. 현재 멤버 카드는 부모 요소의 가로 너비 안에서 자신의 너비에 맞춰 자동으로 래핑 됩니다.
      </p>
      <p>그럼 <code>q-gutter</code>를 이용해 간격을 주도록 하겠습니다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;template&#62;
  &#60;div class="row q-gutter-lg"&#62;
    &#60;q-card v-for="c in 10" :key="c"&#62;
      &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
      &#60;q-card-section&#62;
        &#60;div&#62;홍길동&#60;/div&#62;
        &#60;div&#62;디자인 팀&#60;/div&#62;
        &#60;div&#62;010-0000-0000&#60;/div&#62;
      &#60;/q-card-section&#62;
    &#60;/q-card&#62;
  &#60;/div&#62;
&#60;/template&#62;
  </textarea>
      </Code>
      <b>결과</b>
      <div class="row q-gutter-lg">
        <q-card v-for="c in 8" :key="c">
          <div class="text-center bg-primary text-white">멤버</div>
          <q-card-section>
            <div>홍길동</div>
            <div>디자인 팀</div>
            <div>010-0000-0000</div>
          </q-card-section>
        </q-card>
      </div>
      <p class="q-py-lg"></p>
      <p>일반적으로 <code>row</code> 클래스에 인접한 자식 요소인 <em>QCard</em> 컴포넌트에 <code>col</code> 클래스를 적용하려면
        <code>q-gutter-*</code>형식 대신
        <code>q-col-gutter-*</code>을 사용해야 하며, <code>q-col-gutter-*</code> 클래스의 특성상 자식 요소의 상단과 좌측 마진에 영향을 주므로
        <em>QCard</em> 컴포넌트를 한 번 더 래핑 해 주는 것이 필요합니다. 좀 더 그럴싸한 반응형 웹을 만들기 위해 <code>col</code> 클래스를 적용해 봅시다.
      </p>
      <p>아래 예제에서 래핑 여부에 따른 차이를 확인해 보세요:</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;template&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;q-card v-for="c in 4" :key="c" class="col-6 col-md-4"&#62;
      &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
      &#60;q-card-section&#62;
        &#60;div&#62;홍길동&#60;/div&#62;
        &#60;div&#62;디자인 팀&#60;/div&#62;
        &#60;div&#62;010-0000-0000&#60;/div&#62;
      &#60;/q-card-section&#62;
    &#60;/q-card&#62;
    &#60;div v-for="d in 4" :key="d" class="col-6 col-md-4"&#62;
      &#60;q-card&#62;
        &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
        &#60;q-card-section&#62;
          &#60;div&#62;홍길동&#60;/div&#62;
          &#60;div&#62;디자인 팀&#60;/div&#62;
          &#60;div&#62;010-0000-0000&#60;/div&#62;
        &#60;/q-card-section&#62;
      &#60;/q-card&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;
  </textarea>
      </Code>
      <b>결과</b>
      <div class="row q-col-gutter-lg">
        <q-card v-for="c in 4" :key="c" class="col-6 col-md-4">
          <div class="text-center bg-primary text-white">멤버</div>
          <q-card-section>
            <div>홍길동</div>
            <div>디자인 팀</div>
            <div>010-0000-0000</div>
          </q-card-section>
        </q-card>
        <div v-for="d in 4" :key="d" class="col-6 col-md-4">
          <q-card>
            <div class="text-center bg-primary text-white">멤버</div>
            <q-card-section>
              <div>홍길동</div>
              <div>디자인 팀</div>
              <div>010-0000-0000</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p>어떤가요? 래핑 된 <em>QCard</em> 컴포넌트가 우리가 렌더링 되길 원했던 간격으로 표시되고 있다는 것을 확인할 수 있습니다. <code>col-6 col-md-4</code> 클래스를
        사용하면 화면의
        너비가 중형 사이즈(md:1024px) 이상인 경우(4/12 = 33%), 한 라인에 <em>QCard</em> 컴포넌트가 3개씩 배치되고 중형 사이즈 미만인 경우(6/12 = 50%), 한
        라인에
        2개씩 배치됩니다. </p>
      <p>이제 제법 그럴싸해 보이는 멤버 리스트가 완성되었습니다. 하지만 현재 리스트는 실제 멤버 데이터가 아닌 단순히 QCard 컴포넌트를 반복 렌더링 했을 뿐입니다.</p>
      <p>이제 <em>composition API</em>의 <code>reactive</code> 반응형 객체를 이용해 멤버 데이터를 만들어 바인딩 해보도록 하겠습니다.</p>
      <Info advice color="teal-4">
        <ul>
          <li>Vue.js에서 <strong>반응성</strong>은 꼭 익히고 넘어가야 할 중요한 부분입니다.</li>
          <li>Vue.js 공식 홈페이지의
            <Link href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html" color="green-7">Reactivity
            Fundamentals</Link>
            항목을 꼭 읽어보실 것을 추천드립니다!
          </li>
        </ul>
      </Info>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
{{ 'import { reactive } from \'vue\'' }}

const members = reactive([
  &#123; name: '홍길동', team: '디자인 팀', contact: '010-0000-0000' &#125;,
  &#123; name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111' &#125;,
  &#123; name: '아이유', team: '가수 팀', contact: '010-2222-2222' &#125;
])
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
      &#60;q-card&#62;
        &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
        &#60;q-card-section&#62;
          &#60;div&#62;&#123;&#123; m.name &#125;&#125;&#60;/div&#62;
          &#60;div&#62;&#123;&#123; m.team &#125;&#125;&#60;/div&#62;
          &#60;div&#62;&#123;&#123; m.contact &#125;&#125;&#60;/div&#62;
        &#60;/q-card-section&#62;
      &#60;/q-card&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;
  </textarea>
      </Code>
      <b>결과</b>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members" :key="m" class="col-6 col-md-4">
          <q-card>
            <div class="text-center bg-primary text-white">멤버</div>
            <q-card-section>
              <div>{{ m.name }}</div>
              <div>{{ m.team }}</div>
              <div>{{ m.contact }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p><code>reactive</code> 객체로 만든 <code>members</code> 데이터가 정상적으로 <em>QCard</em> 컴포넌트에 바인딩 되었습니다.</p>
      <p>왜 굳이 <span class="text-green-6" t>Vue.js</span>에서는 반응형 객체로 만든 데이터를 사용해야 할까요? 일반적인 <em>Array</em> 형태로 사용해도 렌더링
        결과는 같지만 새로운 멤버의 데이터를 추가하거나 수정, 삭제하고자 할 때 즉, <strong>이미 화면에 렌더링 된 요소들의 변경이 필요할 때</strong> 반응형 객체를 사용해야 합니다.(Array
        유형을 사용한 경우 렌더링이 끝난 시점에서 값을 변경해도 화면에 적용되지 않습니다)</p>
      <p>다음 챕터에서는 오늘 만든 멤버 카드를 <b>컴포넌트로 분리</b>하는 방법을 알아보도록 하겠습니다.</p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="준비하기" prev :to="{ name: 'ready' }" />
        <Move label="컴포넌트 분리하기" next :to="{ name: 'component' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>