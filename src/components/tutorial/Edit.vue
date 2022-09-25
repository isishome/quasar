<script setup>
import { defineAsyncComponent, reactive } from 'vue'
import { uid } from 'quasar'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Member = defineAsyncComponent(() => import('./member/CEdit.vue'))
const Member2 = defineAsyncComponent(() => import('./member/CEdit2.vue'))

const members = reactive([
  { mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000', editable: false },
  { mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111', editable: false },
  { mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222', editable: false }
])

const members2 = reactive([
  { mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000', editable: false },
  { mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111', editable: false },
  { mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222', editable: false }
])

const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '', editable: false })
}

const addMember2 = () => {
  members2.unshift({ mid: uid(), name: '', team: '', contact: '', editable: false })
}

const update = (mid, key, val) => {
  const findMember = members2.find(m => m.mid === mid)

  if (findMember)
    findMember[key] = val
}
</script>

<template>
  <div class="q-px-md text-body2">
    <section>
      <Title head>카드 수정하기
      </Title>
      <p>이번 챕터에서는
        <Link :to="{ name: 'component' }">
        지난 챕터</Link>에서 분리한 멤버 컴포넌트에 수정 기능을 추가해 보도록 하겠습니다.
      </p>
    </section>
    <section id="editable" data-name="수정 모드 만들기">
      <Title sub>수정 모드 만들기</Title>
      <p>지난 챕터에 만든 <em>Member.vue</em> 파일을 열어 "수정 모드"를 추가하기 위해 <em>Boolean</em> 유형의 <code>editable</code> props를 새로 정의해
        줍니다.
        멤버 컴포넌트를 사용하는 페이지나 컴포넌트가 <code>editable</code> props를 변경하면 멤버 카드를 구성하는
        DOM 요소가 수정 가능 상태임을 사용자에게 알려주기 위한 화면 처리도 함께 적용해 보도록 하겠습니다.
      </p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- Member.vue --&#62;

&#60;script setup&#62;
import &#123; ref &#125; from 'vue'

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
  &#125;,
  // 수정 모드를 변경하기 위한 props
  editable: &#123;
    type: Boolean,
    default: false
  &#125;
&#125;)

// 컴포넌트 내부에서 사용할 멤버 데이터
const _name = ref(props.name)
const _team = ref(props.team)
const _contact = ref(props.contact)
&#60;/script&#62;
    
&#60;template&#62;
  &#60;q-card&#62;
    &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
    &#60;q-card-section&#62;
      &#60;q-input v-model="_name" :readonly="!editable" dense :borderless="!editable" /&#62;
      &#60;q-input v-model="_team" :readonly="!editable" dense :borderless="!editable" /&#62;
      &#60;q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable" /&#62;
    &#60;/q-card-section&#62;
  &#60;/q-card&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <p>텍스트 보간(<em>&#123;&#123; name &#125;&#125;</em> - 일명 mustache syntax)을 사용하여 정보를 바인딩 하던 부분을 Quasar의
        <em>QInput</em>
        컴포넌트로 변경해
        주었습니다. 그리고 props로 전달받은 정보들을 초깃값으로 하는 새로운 반응형 객체들을 각 <em>QInput</em> 컴포넌트에 v-model로 바인딩 해주었고,
        멤버 컴포넌트의 수정 가능 상태가 바뀐다는 것을 명시하기 위해 <em>QInput</em>의
        <code>readonly</code>와
        <code>borderless</code>를 <code>editable</code> props로 바인딩 해주었습니다.
        (readonly와 borderless는 단어 그대로 editable props에 따른 DOM 요소의 읽기 전용 속성 및 테두리 표시 전환 상태를 지정할 수 있습니다.)
      </p>
      <Info advice color="teal-4">
        <p><b>왜 props로 전달된 정보 값들을 바로 사용하지 않고 <em>_name</em>과 같은 새 변수에 할당해 주었을까요?</b></p>
        <p><span class="text-green-7">vue.js</span>에서는 <strong>부모 컴포넌트와 자식 컴포넌트 사이에 전달되는 모든 props 값이 단방향으로
            처리됩니다(부모 &rarr; 자식)</strong>. 만약 자식
          컴포넌트가
          전달받은 props의
          변경(Mutation)을 시도하는
          경우 콘솔 창에 경고를 표시할 수도 있습니다.</p>
      </Info>
      <p>이제 수정 모드가 추가된 컴포넌트가 정상적으로 동작하는지 확인해 봅시다.
      </p>
      <p>먼저 멤버 컴포넌트를 사용하는 상위 페이지로 돌아가 멤버 데이터에 수정 여부 값(<em>editable: false</em>)을 추가하고, 카드 상단에 수정
        상태 변경 버튼도 추가해 줍시다.</p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
{{ 'import { reactive, defineAsyncComponent } from \'vue\'' }}
{{ 'import { uid } from \'quasar\'' }}

const members = reactive([
  &#123; mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000', editable: false &#125;,
  &#123; mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111', editable: false &#125;,
  &#123; mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222', editable: false &#125;
])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() =&#62; import('./Member.vue'))

// Member를 추가하는 메서드
const addMember = () =&#62; &#123;
  members.unshift(&#123; mid: uid(), name: '', team: '', contact: '', editable: '' &#125;)
&#125;
&#60;/script&#62;
    
&#60;template&#62;
  &#60;div class="row justify-end q-pb-sm"&#62;
    &#60;q-btn dense icon="add" round color="positive" @click="addMember" /&#62;
  &#60;/div&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
      &#60;!-- 수정 모드 변경을 위해 버튼 추가 --&#62;
      &#60;q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" /&#62;
      &#60;q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" /&#62;
      &#60;Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable" /&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <b>결과</b>
      <div class="row justify-end q-pb-sm">
        <q-btn dense icon="add" round color="positive" @click="addMember" />
      </div>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members" :key="m" class="col-6 col-md-4">
          <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit"
            @click="m.editable = true" />
          <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" />
          <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable" />
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p>각 카드의 상단
        <q-btn dense flat icon="edit" color="grey" size="sm" /> 버튼을 클릭하면 해당 멤버 카드 정보가 수정 상태로 변경됩니다 (
        <q-btn dense round icon="check" color="primary" size="sm" /> 버튼을 클릭하면 수정 모드가 비활성화됩니다). 사용자 입장에서는
        모든
        기능이 정상적으로
        동작하는 것처럼 보이지만
        데이터(:아래)를 확인해 보면
        <b>화면상에서 수정된 값들이 실제로 적용되지
          않은 것</b>을 확인할 수 있습니다 (멤버 컴포넌트 내부적으로 전달받은 props를 초깃값으로 하는 새 반응형 객체를 사용하고 있기 때문).
        <Info>
          <p><b>Member 데이터</b></p>
          <p>
            {{members}}
          </p>
        </Info>
      </p>
    </section>
    <section id="apply" data-name="수정 데이터 적용하기">
      <Title sub>수정 데이터 적용하기</Title>
      <p>이제 멤버 컴포넌트에서 수정된 데이터를 상위 페이지에서 실제로 적용하는 방법을 알아보도록 하겠습니다. 멤버 컴포넌트의 정보가 업데이트되면 <code>defineEmits</code>
        API를 이용해 미리 <em>@update</em> 이벤트를 정의해 둡니다. 그리고 각 멤버 데이터의 값이 변경되면 @update를 호출하고, 상위 페이지에서
        <em>@update</em>로 바인딩 된 이벤트를 실행해서 실제 데이터를 업데이트해 주면 됩니다.
      </p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- Member.vue --&#62;

&#60;script setup&#62;
{{ 'import { ref } from \'vue\'' }}

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
  &#125;,
  // 수정 모드를 변경하기 위한 props
  editable: &#123;
    type: Boolean,
    default: false
  &#125;
&#125;)

// emits 을 정의해 줍니다.
const emit = defineEmits(['update'])

// 컴포넌트 내부에서 사용할 멤버 데이터
const _name = ref(props.name)
const _team = ref(props.team)
const _contact = ref(props.contact)
&#60;/script&#62;
    
&#60;template&#62;
  &#60;q-card&#62;
    &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
    &#60;q-card-section&#62;
      &#60;!-- 
        @update:model-value 이벤트로 QInput에 바인딩 된 데이터가 변경되면 
        상위 컴포넌트의 @update로 변경된 정보를 전달해 줍니다 
      --&#62;
      &#60;q-input v-model="_name" :readonly="!editable" dense :borderless="!editable"
        @update:model-value="val =&#62; emit('update', props.mid,'name', val)" /&#62;
      &#60;q-input v-model="_team" :readonly="!editable" dense :borderless="!editable"
        @update:model-value="val =&#62; emit('update', props.mid,'team', val)" /&#62;
      &#60;q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable"
        @update:model-value="val =&#62; emit('update', props.mid,'contact', val)" /&#62;
    &#60;/q-card-section&#62;
  &#60;/q-card&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <p>멤버 컴포넌트 <em>QInput</em>의 <em>@update:model-value</em> 이벤트로 바인딩 된 데이터가 변경되면 상위 컴포넌트의 @update로 변경된 정보를 전달해
        줍니다 (멤버의 고유 아이디, 변경되는 항목, 변경 값).</p>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
{{ 'import { reactive, defineAsyncComponen } from \'vue\'' }}
{{ 'import { uid } from \'quasar\'' }}

const members = reactive([
  &#123; mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000', editable: false &#125;,
  &#123; mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111', editable: false &#125;,
  &#123; mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222', editable: false &#125;
])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() =&#62; import('./Member.vue'))

// Member를 추가하는 메서드
const addMember = () =&#62; &#123;
  members.unshift(&#123; mid: uid(), name: '', team: '', contact: '', editable: false &#125;)
&#125;

// Member 정보를 수정하는 메서드
const update = (mid, key, val) =&#62; &#123;
  const findMember = members.find(m =&#62; m.mid === mid)

  if (findMember)
    findMember[key] = val
&#125;
&#60;/script&#62;
      
&#60;template&#62;
  &#60;div class="row justify-end q-pb-sm"&#62;
    &#60;q-btn dense icon="add" round color="positive" @click="addMember" /&#62;
  &#60;/div&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
      &#60;!-- 수정 모드 변경을 위해 버튼 추가 --&#62;
      &#60;q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" /&#62;
      &#60;q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" /&#62;
      &#60;!-- @update 이벤트를 바인딩 --&#62;
      &#60;Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable" @update="update" /&#62;
    &#60;/div&#62;
  &#60;/div&#62;
  &#60;Info&#62;
    &#60;p&#62;&#60;b&#62;Member 데이터&#60;/b&#62;&#60;/p&#62;
    &#60;p&#62;
      &#123;&#123;members&#125;&#125;
    &#60;/p&#62;
  &#60;/Info&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <p>멤버 컴포넌트에서 호출된 <em>@update</em>를 처리할 <code>update</code> 메서드를 추가했습니다. <code>update</code> 메서드는
        <code>memebers</code> 객체에서
        전달받은 고유의 <em>mid</em> 값의 멤버가
        존재하면 해당 멤버의 데이터를
        업데이트해줍니다.
      </p>
      <p>현재까지 작성된 코드가 잘 동작하는지 테스트해 봅시다. 카드의 멤버 항목이 업데이트되면 실제 <code>members</code> 객체도 함께 업데이트되는 것을 확인할 수 있습니다.</p>
      <b>결과</b>
      <div class="row justify-end q-pb-sm">
        <q-btn dense icon="add" round color="positive" @click="addMember2" />
      </div>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members2" :key="m" class="col-6 col-md-4">
          <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit"
            @click="m.editable = true" />
          <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" />
          <Member2 :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable"
            @update="update" />
        </div>
      </div>
      <p class="q-py-lg"></p>
      <Info>
        <p><b>Member 데이터</b></p>
        <p>
          {{members2}}
        </p>
      </Info>
      <p>다음 챕터에서는 <b>멤버 카드 정보를 실제 저장소(세션 스토리지)에 저장</b>하는 작업을 진행해 보도록 하겠습니다.</p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="컴포넌트 분리하기" prev :to="{ name: 'component' }" />
        <Move label="카드 정보 저장하기" next :to="{ name: 'storage' }" disable />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>