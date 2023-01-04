<script setup>
import { defineAsyncComponent, reactive } from 'vue'
import { uid, useQuasar } from 'quasar'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Practice = defineAsyncComponent(() => import('@/components/block/Practice.vue'))
const Member = defineAsyncComponent(() => import('./member/CSoc.vue'))

const $q = useQuasar()

const members = reactive($q.sessionStorage.getItem('soc') || [])

const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })
}

const upsert = (data, done) => {
  const findMember = members.find(m => m.mid === data.mid)
  const storageMembers = $q.sessionStorage.getItem('soc') || []
  const findStorageMember = storageMembers.find(m => m.mid === data.mid)

  if (findMember) {
    findMember.name = data.name
    findMember.team = data.team
    findMember.contact = data.contact

    if (findStorageMember) {
      findStorageMember.name = data.name
      findStorageMember.team = data.team
      findStorageMember.contact = data.contact
    }
    else
      storageMembers.unshift(findMember)
  }

  $q.sessionStorage.set('soc', storageMembers)

  done()
}

const remove = (mid) => {
  const findIndex = members.findIndex(m => m.mid === mid)
  const storageMembers = $q.sessionStorage.getItem('soc') || []
  const findStorageIndex = storageMembers.findIndex(m => m.mid === mid)

  if (findIndex !== -1) {
    members.splice(findIndex, 1)

    if (findStorageIndex !== -1)
      storageMembers.splice(findStorageIndex, 1)
  }

  $q.sessionStorage.set('soc', storageMembers)
}
</script>
<template>
  <div class="q-px-md text-body2">
    <section>
      <Title head>관심사의 분리
      </Title>
      <p>이번 챕터에서는 <strong>관심사의 분리(Separation Of Concerns)</strong> 디자인 원칙을 활용해 멤버 카드 컴포넌트가 단순히 멤버의 데이터를 전달받고 원하는 경우에 변경된
        정보만을 제공하도록 코드를 수정해
        보도록 하겠습니다.
      </p>
    </section>
    <section id="comp" data-name="컴포넌트 수정">
      <Title sub>컴포넌트 수정</Title>
      <p><strong>멤버 컴포넌트 코드를 아래와 같이 수정했습니다.</strong>
      </p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javasc  ript': 'vue' }">
        <textarea readonly>
// Member.vue

const props = defineProps(&#123;
  data: &#123;
    type: Object,
    default: () =&#62; &#123; &#125;
  &#125;
&#125;)
        </textarea>
      </Code>
      <p class="q-pb-xl">이전 챕터에서 각각 <em>props</em>로 전달받았던 데이터(이름, 팀, 연락처)들을 <strong>단일 객체 형식</strong>으로 전달받도록 수정했습니다.
      </p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'ja  vascript': 'vu  e' }">
        <textarea readonly>
// Member.vue

const _name = ref(props.data.name)
const _team = ref(props.data.team)
const _contact = ref(props.data.contact)

const loading = ref(false)
const editable = ref(false)
        </textarea>
      </Code>
      <p class="q-pb-xl">이전 챕터에서 상위 요소에 포함되었던 <code>editable</code> 값을 컴포넌트 내부에 포함시키고 로딩 진행 상태를 표시해 줄 반응형 값을 추가했습니다.
      </p>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': '  vue' }">
        <textarea readonly>
&#60;!-- Member.vue --&#62;

&#60;!-- Quasar Inner Loading 컴포넌트를 사용해 로딩 상태를 표시 --&#62;
&#60;q-inner-loading :showing="loading" style="z-index:1"&#62;
  &#60;q-spinner size="50px" color="primary" /&#62;
&#60;/q-inner-loading&#62;
        </textarea>
      </Code>
      <p>
        Quasar
        <Link href="https://quasar.dev/vue-components/inner-loading">Inner Loading</Link> 컴포넌트를 사용하여
        <code>loading</code> 값에 따라 화면에 로딩 상태를 표시합니다.
      </p>
      <Info advice color="teal-4" class="q-pb-xl">
        <p>
          보통 실무작업 시 백엔드에서 데이터를 가져오거나 저장하는데 <strong>지체되는 시간을 사용자가 확인할 수 있도록</strong> 로딩 바를 표시해 주는 것이 좋습니다.
        </p>
        <p>Quasar에는 loading 상태를 처리할 만한 몇 가지 컴포넌트가 제공됩니다.</p>
        <ul>
          <li>
            <Link href="https://quasar.dev/vue-components/inner-loading">Inner Loading</Link>
          </li>
          <li>
            <Link href="https://quasar.dev/vue-components/linear-progress">Linear Progress</Link>
          </li>
          <li>
            <Link href="https://quasar.dev/vue-components/spinners">Spinners</Link>
          </li>
        </ul>
      </Info>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': '  vue' }">
        <textarea readonly>
          &#60;!-- Member.vue --&#62;

&#60;div class="q-pa-sm bg-primary"&#62;
  &#60;div class="row justify-between"&#62;
    &#60;div class="row items-center q-gutter-x-xs"&#62;
      &#60;!-- 수정 모드에서만 멤버 카드 삭제 버튼을 노출 --&#62;
      &#60;q-btn v-if="editable" dense flat round size="sm" color="negative" icon="playlist_remove" @click="remove" /&#62;
      &#60;div class="text-center text-white"&#62;멤버&#60;/div&#62;
    &#60;/div&#62;
    &#60;div&#62;
      &#60;!--  --&#62;
      &#60;q-btn v-if="!editable" unelevated dense round flat size="sm" color="white" icon="edit" @click="editable = true" /&#62;
      &#60;template v-else&#62;
        &#60;q-btn unelevated dense round flat size="sm" color="white" icon="close" @click="cancel" /&#62;
        &#60;q-btn unelevated dense round size="sm" color="positive" icon="check" @click="upsert" /&#62;
      &#60;/template&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <p class="q-pb-xl">카드 상단에 <em>수정</em>, <em>취소</em>, <em>저장</em>, <em>삭제</em> 버튼을 포함시킵니다. Quasar <em>Flex
          Grid</em>를 이용해 타이틀과 버튼들을 적당한 곳에 위치시켜 줍니다.</p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javascript  ': 'vue' }">
        <textarea readonly>
// Member.vue

// 완료 시 수정 모드를 비활성화
const done = () =&#62; &#123;
  loading.value = false
  editable.value = false
&#125;
        </textarea>
      </Code>
      <p class="q-pb-xl">완료 시 로딩 값 및 수정 상태 값을 <em>false</em>로 변경해 줄 메서드를 만들어 줍니다. <code>emit</code> 호출 시 파라미터로 넘겨주면 상위
        요소는 지정된 처리가 완료된 경우 전달받은 <code>done</code>을 호출합니다.</p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javasc  ript': 'vue' }">
        <textarea readonly>
// Member.vue

// 삭제 시 Quasar 알림 플러그인 호출
const remove = () =&#62; &#123;
  $q.notify(&#123;
    progress: true,
    message: '해당 멤버 카드를 삭제할까요?',
    color: 'indigo-5',
    multiLine: true,
    actions: [
      &#123;
        label: '확인', color: 'negative', handler: () =&#62; &#123;
          loading.value = false
          emit('remove', props.data.mid)
        &#125;
      &#125;,
      &#123; label: '취소', color: 'white' &#125;
    ]
  &#125;)
&#125;
        </textarea>
      </Code>
      <p class="q-pb-xl">멤버 삭제 시
        <Link :to="{ name: 'notify' }">Notify</Link> 플러그인을 사용하여 삭제 여부를 확인합니다.
      </p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javascript  ': 'vue' }">
        <textarea readonly>
// Member.vue

// 취소 시 기존 데이터로 되돌림
const cancel = () =&#62; &#123;
  _name.value = props.data.name
  _team.value = props.data.team
  _contact.value = props.data.contact
  editable.value = false
&#125;
        </textarea>
      </Code>
      <p class="q-pb-xl">수정 취소 시 생성된 정보들을 <em>props</em>로 전달받은 초기 데이터로 되돌립니다. (<b>동시에 수정 모드
          비활성화</b>)</p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javascript': 'vue' }">
        <textarea readonly>
// Member.vue

// 데이터를 수정 또는 입력 (현재 멤버 데이터를 상위 컴포넌트 or 페이지에 전달)
const upsert = () =&#62; &#123;
  loading.value = true

  // 로딩 바를 확인하기 위해 setTimeout 으로 2초를 지연
  setTimeout(() =&#62; &#123;
    emit('upsert', &#123;
      mid: props.data.mid,
      name: _name.value,
      team: _team.value,
      contact: _contact.value
    &#125;, done)
  &#125;, 2000)
&#125;
&#60;/script&#62;
        </textarea>
      </Code>
      <p class="q-pb-xl">새로운 멤버 입력 또는 수정 시 현재 컴포넌트에 바인딩 된(수정된) 데이터를 상위 요소로 전달해 줍니다. 여기에 로딩 바를 확인하기 위한
        <code>setTimeout</code>을 추가해 주었습니다. (<b><code>done</code> 메서드 파라미터
          포함</b>)
      </p>
    </section>
    <section id="page" data-name="페이지 수정">
      <Title sub>페이지 수정</Title>
      <p><strong>멤버 컴포넌트를 사용하는 페이지 코드를 아래와 같이 수정했습니다.</strong></p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javascript': 'vue' }">
        <textarea readonly>
// App.vue

// Member를 추가하는 메서드
const addMember = () =&#62; &#123;
  members.unshift(&#123; mid: uid(), name: '', team: '', contact: '' &#125;)
&#125;
        </textarea>
      </Code>
      <p class="q-pb-xl">이전 챕터에서 만들었던 <em>addMember</em> 메서드 안의 멤버 데이터 중 <code>editable</code> 속성은 제거됩니다.</p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javascript': 'vue' }">
        <textarea readonly>
// App.vue

// Member 정보를 수정하는 메서드
const upsert = (data, done) =&#62; &#123;
  const findMember = members.find(m =&#62; m.mid === data.mid)
  const storageMembers = $q.sessionStorage.getItem('members') || []
  const findStorageMember = storageMembers.find(m =&#62; m.mid === data.mid)

  if (findMember) &#123;
    findMember.name = data.name
    findMember.team = data.team
    findMember.contact = data.contact

    if (findStorageMember) &#123;
      findStorageMember.name = data.name
      findStorageMember.team = data.team
      findStorageMember.contact = data.contact
    &#125;
    else
      storageMembers.unshift(findMember)
  &#125;

  $q.sessionStorage.set('members', storageMembers)

  done()
&#125;
        </textarea>
      </Code>
      <p class="q-pb-xl">전달받은 수정된(혹은 추가된) 데이터와 완료 메서드(<em>done</em>)를 이용해 <em>members</em> 객체 및 세션 스토리지의 정보를 동시에 적용합니다.
        <em>findStorageMember</em>가 존재하지 않는 경우 <em>findMember</em> 값을 <strong>직접 추가해 줍니다.</strong> 최종적으로 수정된 데이터를 세션
        스토리지에 저장하고 전달받은
        <em>done</em> 메서드를 호출하면 정상적으로 수정이 완료된 상태가 됩니다.
      </p>
      <Code class="q-mb-sm" language="javascript" :convert="{ 'javascript': 'vue' }">
        <textarea readonly>
// App.vue

// Member 정보를 제거하는 메서드
const remove = (mid) =&#62; &#123;
  const findIndex = members.findIndex(m =&#62; m.mid === mid)
  const storageMembers = $q.sessionStorage.getItem('members') || []
  const findStorageIndex = storageMembers.findIndex(m =&#62; m.mid === mid)

  if (findIndex !== -1) &#123;
    members.splice(findIndex, 1)

    if (findStorageIndex !== -1)
      storageMembers.splice(findStorageIndex, 1)
  &#125;

  $q.sessionStorage.set('members', storageMembers)
&#125;
        </textarea>
      </Code>
      <p class="q-pb-xl">전달받은 <em>mid</em>를 이용해 <em>members</em> 객체 및 세션 스토리지의 해당 멤버 정보를 동시에 제거합니다. 최종적으로 나머지 멤버 데이터를 세션
        스토리지에 저장합니다.
      </p>
      <Code class="q-mb-sm" language="html" :convert="{ 'html': 'vue' }">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
  &#60;Member :data="m" @upsert="upsert" @remove="remove" /&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <p class="q-pb-xl">멤버 컴포넌트의 사용은 간소하게 변경되었습니다. 멤버 정보를 전달받을 <code>data</code>, 새 멤버 추가 또는 수정 처리를 위한
        <code>@upsert</code> 이벤트와
        멤버 삭제 처리를 위한 <code>@remove</code> 이벤트를 정의해 주면 됩니다.
      </p>
    </section>
    <section id="result" data-name="결과물">
      <Title sub>결과물</Title>
      <p>결과물을 확인해 봅시다. 멤버를 추가, 수정, 삭제함과 동시에 브라우저의 <em>DevTools</em>를 사용해 세션 스토리지에 데이터가 어떻게 저장되는지 확인해 보세요</p>
      <Info advice color="teal-4" class="q-pb-xl">
        <p class="row inline-block">
          코드 보기
          <q-btn icon="code" round size="sm" aria-label="show code" /> 버튼을 클릭하면 전체 소스코드를 확인할 수 있습니다.
        </p>
      </Info>
      <Practice :options="[
        { label: 'Member.vue', value: 'comp' },
        { label: 'App.vue', value: 'app' }
      ]">
        <template #comp>
          <Code language="html" :convert="{ 'html': 'vue' }">
            <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
import &#123; ref &#125; from 'vue'
{{ 'import { useQuasar } from \'quasar\'' }}

const props = defineProps(&#123;
  data: &#123;
    type: Object,
    default: () =&#62; &#123; &#125;
  &#125;
&#125;)

const $q = useQuasar()

// 상위 컴포넌트 or 페이지의 이벤트 리스너를 정의해 줍니다.
const emit = defineEmits(['upsert', 'remove'])

// 컴포넌트 내부에서 사용할 멤버 데이터
const _name = ref(props.data.name)
const _team = ref(props.data.team)
const _contact = ref(props.data.contact)

const loading = ref(false)
const editable = ref(false)

// 완료 시 수정 모드를 비활성화
const done = () =&#62; &#123;
  loading.value = false
  editable.value = false
&#125;

// 삭제 시 Quasar 알림 플러그인 호출
const remove = () =&#62; &#123;
  $q.notify(&#123;
    progress: true,
    message: '해당 멤버 카드를 삭제할까요?',
    color: 'indigo-5',
    multiLine: true,
    actions: [
      &#123;
        label: '확인', color: 'negative', handler: () =&#62; &#123;
          loading.value = false
          emit('remove', props.data.mid)
        &#125;
      &#125;,
      &#123; label: '취소', color: 'white' &#125;
    ]
  &#125;)
&#125;

// 취소 시 기존 데이터로 되돌림
const cancel = () =&#62; &#123;
  _name.value = props.data.name
  _team.value = props.data.team
  _contact.value = props.data.contact
  editable.value = false
&#125;

// 데이터를 수정 또는 입력 (현재 멤버 데이터를 상위 컴포넌트 or 페이지에 전달)
const upsert = () =&#62; &#123;
  loading.value = true

  // 로딩 바를 확인하기 위해 setTimeout 으로 2초를 지연
  setTimeout(() =&#62; &#123;
    emit('upsert', &#123;
      mid: props.data.mid,
      name: _name.value,
      team: _team.value,
      contact: _contact.value
    &#125;, done)
  &#125;, 2000)
&#125;
&#60;/script&#62;
      
&#60;template&#62;
  &#60;q-card class="overflow-hidden"&#62;
    &#60;!-- Quasar Inner Loading 컴포넌트를 사용해 로딩 상태를 표시 --&#62;
    &#60;q-inner-loading :showing="loading" style="z-index:1"&#62;
      &#60;q-spinner size="50px" color="primary" /&#62;
    &#60;/q-inner-loading&#62;
    &#60;div class="q-pa-sm bg-primary"&#62;
      &#60;div class="row justify-between"&#62;
        &#60;div class="row items-center q-gutter-x-xs"&#62;
          &#60;!-- 수정 모드에서만 멤버 카드 삭제 버튼을 노출 --&#62;
          &#60;q-btn v-if="editable" dense flat round size="sm" color="negative" icon="playlist_remove" @click="remove" /&#62;
          &#60;div class="text-center text-white"&#62;멤버&#60;/div&#62;
        &#60;/div&#62;
        &#60;div&#62;
          &#60;!--  --&#62;
          &#60;q-btn v-if="!editable" unelevated dense round flat size="sm" color="white" icon="edit"
            @click="editable = true" /&#62;
          &#60;template v-else&#62;
            &#60;q-btn unelevated dense round flat size="sm" color="white" icon="close" @click="cancel" /&#62;
            &#60;q-btn unelevated dense round size="sm" color="positive" icon="check" @click="upsert" /&#62;
          &#60;/template&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
    &#60;q-card-section&#62;
      &#60;q-input v-model="_name" :readonly="!editable" dense :borderless="!editable" /&#62;
      &#60;q-input v-model="_team" :readonly="!editable" dense :borderless="!editable" /&#62;
      &#60;q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable" /&#62;
    &#60;/q-card-section&#62;
  &#60;/q-card&#62;
&#60;/template&#62;
      
&#60;style scoped&#62;

&#60;/style&#62;
            </textarea>
          </Code>
        </template>
        <template #app>
          <Code language="html" :convert="{ 'html': 'vue' }">
            <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;script setup&#62;
import &#123; reactive, defineAsyncComponent &#125; from 'vue'
{{ 'import { uid, useQuasar } from \'quasar\'' }}

// $q 객체
const $q = useQuasar()

// 멤버 데이터 초기값을 세션 스토리지에서 가져옵니다.
const members = reactive($q.sessionStorage.getItem('members') || [])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() =&#62; import('./Member.vue'))

// Member를 추가하는 메서드
const addMember = () =&#62; &#123;
  members.unshift(&#123; mid: uid(), name: '', team: '', contact: '' &#125;)
&#125;

// Member 정보를 수정하는 메서드
const upsert = (data, done) =&#62; &#123;
  const findMember = members.find(m =&#62; m.mid === data.mid)
  const storageMembers = $q.sessionStorage.getItem('members') || []
  const findStorageMember = storageMembers.find(m =&#62; m.mid === data.mid)

  if (findMember) &#123;
    findMember.name = data.name
    findMember.team = data.team
    findMember.contact = data.contact

    if (findStorageMember) &#123;
      findStorageMember.name = data.name
      findStorageMember.team = data.team
      findStorageMember.contact = data.contact
    &#125;
    else
      storageMembers.unshift(findMember)
  &#125;

  $q.sessionStorage.set('members', storageMembers)

  done()
&#125;

// Member 정보를 제거하는 메서드
const remove = (mid) =&#62; &#123;
  const findIndex = members.findIndex(m =&#62; m.mid === mid)
  const storageMembers = $q.sessionStorage.getItem('members') || []
  const findStorageIndex = storageMembers.findIndex(m =&#62; m.mid === mid)

  if (findIndex !== -1) &#123;
    members.splice(findIndex, 1)

    if (findStorageIndex !== -1)
      storageMembers.splice(findStorageIndex, 1)
  &#125;

  $q.sessionStorage.set('members', storageMembers)
&#125;
&#60;/script&#62;
      
&#60;template&#62;
  &#60;div class="row justify-end q-pb-sm"&#62;
    &#60;q-btn dense icon="add" round color="positive" @click="addMember" /&#62;
  &#60;/div&#62;
  &#60;div class="row q-col-gutter-lg"&#62;
    &#60;div v-for="m in members" :key="m" class="col-6 col-md-4"&#62;
      &#60;Member :data="m" @upsert="upsert" @remove="remove" /&#62;
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
        </template>
        <template #result>
          <div class="q-pa-sm">
            <div class="row justify-end q-pb-sm">
              <q-btn dense icon="add" round color="positive" @click="addMember" aria-label="add member" />
            </div>
            <div class="row q-col-gutter-lg">
              <div v-for="m in members" :key="m" class="col-6 col-md-4">
                <Member :data="m" @upsert="upsert" @remove="remove" />
              </div>
            </div>
            <Info>
              <p><b>Member 데이터</b></p>
              <p>
                {{ members }}
              </p>
            </Info>
          </div>
        </template>
      </Practice>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="카드 정보 저장하기" prev :to="{ name: 'storage' }" />
      </div>
    </div>
  </div>
</template>