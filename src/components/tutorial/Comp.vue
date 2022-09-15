<script setup>
import { defineAsyncComponent, reactive } from 'vue'
import { uid } from 'quasar'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Member = defineAsyncComponent(() => import('./member/CComp.vue'))

const members = reactive([
  { mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000' },
  { mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111' },
  { mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222' }
])

const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })
}
</script>
  
<template>
  <div class="q-px-md text-body2">
    <section>
      <Title head>컴포넌트 분리하기
      </Title>
      <p>이번 챕터에서는
        <Link :to="{ name: 'card' }">
        지난 챕터</Link>에서 만들었던 멤버 카드를 <em>Member.vue</em>라는 싱글 파일 컴포넌트(SFC)로 분리해 보도록 하겠습니다.
      </p>
      <p>먼저 <em>Member.vue</em> 파일을 생성해 줍니다. 그리고 지난번 예제에 사용했던 <em>QCard</em> 부분을 <code>&#60;template&#62;</code>안에 복사
        붙여넣기
        해줍니다.
      </p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
          <textarea readonly>
&#60;!-- Member.vue --&#62;

&#60;script setup&#62;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-card&#62;
    &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
    &#60;q-card-section&#62;
      &#60;div&#62;&#123;&#123; m.name &#125;&#125;&#60;/div&#62;
      &#60;div&#62;&#123;&#123; m.team &#125;&#125;&#60;/div&#62;
      &#60;div&#62;&#123;&#123; m.contact &#125;&#125;&#60;/div&#62;
    &#60;/q-card-section&#62;
  &#60;/q-card&#62;
&#60;/template&#62;

&#60;style scoped&#62;
&#60;/style&#62;
    </textarea>
        </Code>
      <p>이름, 팀 명, 연락처 정보를 <em>props</em>로 새로 정의해 봅시다. 이 정보들은 <em>JSON</em> 객체 유형으로 그룹화해도 되지만 의미를 명확하게 하기 위해 각각의 props를
        나누어 정의하도록
        하겠습니다.</p>
      <p><em>&#60;script setup&#62;</em> 문법에서는 <code>defineProps</code> API를 이용해 props를 정의합니다.</p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- Member.vue --&#62;

&#60;script setup&#62;
const props = defineProps(&#123;
  mid: &#123;
    type: String,
    required: true
  &#125;,
  name: &#123;
    type: String,
    default: ''
  &#125;,
  team: &#123;
    type: String,
    default: ''
  &#125;,
  contact: &#123;
    type: String,
    default: ''
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;q-card&#62;
    &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
    &#60;q-card-section&#62;
      &#60;div&#62;&#123;&#123; name &#125;&#125;&#60;/div&#62;
      &#60;div&#62;&#123;&#123; team &#125;&#125;&#60;/div&#62;
      &#60;div&#62;&#123;&#123; contact &#125;&#125;&#60;/div&#62;
    &#60;/q-card-section&#62;
  &#60;/q-card&#62;
&#60;/template&#62;

&#60;style scoped&#62;
&#60;/style&#62;
        </textarea>
      </Code>
      <p>세 가지 props에 멤버의 고윳값으로 사용할 <code>mid</code> props도 추가해 주었습니다.</p>
      <Info advice color="teal-4">
        <p><b>Composition API</b>의 <em>&#60;script setup&#62;</em> 문법을 사용할 경우 <b>Option API</b>나 <em>setup()</em> 구문에서
          사용하던
          형식
          대신에 props는
          <code>defineProps</code>를, emit은
          <code>defineEmits</code>을 <strong>미리 정의</strong>해야 사용할 수 있습니다.
        </p>
      </Info>

      <p>이제 기존 코드로 돌아가 보겠습니다. 위에서 만들어 둔 <em>Member.vue</em>를 활용해 봅시다. 먼저 <code>defineAsyncComponent</code> API를 사용하여
        Member 컴포넌트를 가져옵니다. 그리고 기존 <em>QCard</em>가 있던 자리에 Member 컴포넌트를 위치시킵니다. 마지막으로 <code>v-bind</code> 디렉티브를 이용해 각 멤버
        데이터들을 컴포넌트의 props에 바인딩 해줍니다. (<code>:</code> = <code>v-bind</code> 디렉티브의 축약형)</p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
{{ 'import { reactive, defineAsyncComponent } from \'vue\'' }}
{{ 'import { uid } from \'quasar\'' }}

const members = reactive([
  &#123; mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000' &#125;,
  &#123; mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111' &#125;,
  &#123; mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222' &#125;
])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() =&#62; import('./Member.vue'))
&#60;/script&#62;
  
&#60;template&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
      &#60;Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" /&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <b>결과</b>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members" :key="m" class="col-6 col-md-4">
          <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" />
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p>멤버 카드를 컴포넌트로 분리하고 나니 코드가 좀 더 정돈된 느낌을 줍니다.
      </p>
      <p>위에서 설명하지 않은 코드도 보이는군요(uid). <code>uid</code>는 Quasar에서 제공하는 일종의 고유 아이디 생성 유틸입니다. 사용법은 메서드 형태로 호출하게 되면
        <em>501e7ae1-7e6f-b923-3e84-4e946bff31a8</em>와 같은 임의 문자열을 반환해 줍니다. 사용자에게는 보이지 않지만 각 컴포넌트마다 고유한 아이디를 갖게 된 셈이죠.
        고유 아이디는 이어지는 챕터에서 아주 유용하게 사용될 예정입니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
// 간단한 uid 유틸 사용법

{{ 'import { uid } from \'quasar\'' }}

let uid = uid()
// 예: 501e7ae1-7e6f-b923-3e84-4e946bff31a8
        </textarea>
      </Code>
      <p>컴포넌트 분리 작업이 간단하게 마무리 되었으니 새 멤버 카드를 추가하는 로직을 만들어 보겠습니다. 먼저 리스트 상단에 버튼을 추가 해봅시다.</p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
{{ 'import { reactive, defineAsyncComponent } from \'vue\'' }}
{{ 'import { uid } from \'quasar\'' }}

const members = reactive([
  &#123; mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000' &#125;,
  &#123; mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111' &#125;,
  &#123; mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222' &#125;
])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() =&#62; import('./Member.vue'))
  
// Member를 추가하는 메서드
const addMember = () =&#62; &#123;
  members.unshift(&#123; mid: uid(), name: '', team: '', contact: '' &#125;)
&#125;
&#60;/script&#62;
  
&#60;template&#62;
  &#60;div class="row justify-end q-pb-sm"&#62;
    &#60;q-btn dense icon="add" round color="positive" @click="addMember" /&#62;
  &#60;/div&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
      &#60;Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" /&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <p>추가되는 버튼이 멤버 리스트 우측 상단에 위치하도록 <em>div</em> 요소(상위 요소)에 <code>row justify-end</code> 클래스를 적용합니다.
        그 안에 <em>QBtn</em> 컴포넌트를 추가하고 click 이벤트에 멤버를 추가하는 메서드 핸들러(addMember)를 정의해 봅시다.
      </p>
      <p>
        <code>addMember</code> 핸들러는 멤버 리스트 객체(반응형)의 맨 앞쪽에 새 멤버 데이터를
        추가하는 간단한 로직으로 구성되어 있습니다(고유 아이디 - <em>mid</em>는 미리 정의된 상태).
      </p>
      <p>아래 멤버 추가 버튼을 클릭해보세요!</p>
      <b>결과</b>
      <div class="row justify-end q-pb-sm">
        <q-btn dense icon="add" round color="positive" @click="addMember" />
      </div>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members" :key="m" class="col-6 col-md-4">
          <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" />
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p>버튼을 누를 때마다 앞쪽에 멤버 카드가 한 장씩 추가됩니다.(물론 빈 값을 넣었으니 내용이 없는 멤버 카드가 추가됩니다.)</p>
      <p>다음 챕터에서는 <b>멤버 카드를 수정</b>하는 기능을 만들어보도록 하겠습니다.</p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="카드 만들기" prev :to="{ name: 'card' }" />
        <Move label="카드 수정하기" next :to="{ name: 'edit' }" />
      </div>
    </div>
  </div>
</template>
  
<style scoped>

</style>