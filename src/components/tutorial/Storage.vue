<script setup>
import { defineAsyncComponent, reactive } from 'vue'
import { uid, useQuasar } from 'quasar'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Member = defineAsyncComponent(() => import('./member/CStorage.vue'))

const $q = useQuasar()

const members = reactive($q.sessionStorage.getItem('members1') || [])
const members2 = reactive($q.sessionStorage.getItem('members2') || [])

const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '', editable: false })
}

const addMember2 = () => {
  members2.unshift({ mid: uid(), name: '', team: '', contact: '', editable: false })
}

const update = (mid, key, val) => {
  const findMember = members.find(m => m.mid === mid)

  if (findMember)
    findMember[key] = val
}

const update2 = (mid, key, val) => {
  const findMember = members2.find(m => m.mid === mid)

  if (findMember)
    findMember[key] = val
}

const store = (mid) => {
  const findMember = members.find(m => m.mid === mid)

  if (findMember) {
    findMember.editable = false
    $q.sessionStorage.set('members1', members)
  }
}

const store2 = (mid) => {
  const tempMembers = $q.sessionStorage.getItem('members2') || []
  const findMember = members2.find(m => m.mid === mid)
  const findTempMember = tempMembers.find(m => m.mid === mid)

  if (findMember) {
    findMember.editable = false

    if (findTempMember) {
      findTempMember.name = findMember.name
      findTempMember.team = findMember.team
      findTempMember.contact = findMember.contact
    }
    else
      tempMembers.unshift(findMember)

    $q.sessionStorage.set('members2', tempMembers)
  }
}
</script>
      
<template>
  <div class="q-px-md text-body2">
    <section>
      <Title head>카드 정보 저장하기
      </Title>
      <p>이번 챕터에서는 멤버 카드의 정보를 로컬 세션 스토리지에 저장하여 사용하는 방법을 알아보도록 하겠습니다.
      </p>
    </section>
    <section id="install" data-name="설치">
      <Title sub>설치</Title>
      <p>로컬 세션 스토리지를 사용하기 위해 <em>main.js</em> 파일의 수정이 필요합니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
// main.js

import &#123;
  Quasar,
  SessionStorage
&#125; from 'quasar'

app.use(Quasar, &#123;
  plugins: &#123;
    SessionStorage
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
      <p>Quasar에서 제공하는 로컬 세션 스토리지 사용법은 아주 간단합니다. <code>$q</code> 객체에 미리 정의된
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API">Web Storage API</Link>의 래퍼인
        <code>sessionStorage</code>를 사용하기만 하면
        됩니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
          // Vue 파일 안에서 사용
{{ 'import &#123; useQuasar &#125; from \'quasar\'' }}

const $q = useQuasar()

$q.localStorage.set(key, value)
const value = $q.localStorage.getItem(key)

$q.sessionStorage.set(key, value)
const otherValue = $q.sessionStorage.getItem(key)
        </textarea>
      </Code>
    </section>
    <section id="storage" data-name="저장하기">
      <Title sub>저장하기</Title>
      <p>이제 지난 챕터까지 작성했던 <em>App.vue</em> 파일에 세션 스토리지를 적용 해 보겠습니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'vue'}">
        <textarea readonly>
// App.vue

// $q 객체
const $q = useQuasar()

const members = reactive($q.sessionStorage.getItem('members') || [])
        </textarea>
      </Code>
      <p>먼저 <code>$q</code> 객체를 정의하고
        <code>members</code> 반응형 객체의 초깃값으로 로컬 세션 스토리지의 'members' 키값을 가져오도록 수정합니다. 해당 키값을 갖는 데이터가 없을 경우 빈 배열([])을 정의해
        줍니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'vue'}">
        <textarea readonly>
// App.vue

// Member 정보를 세션 스토리지에 저장
const store = (mid) =&#62; &#123;
  const findMember = members.find(m =&#62; m.mid === mid)

  if (findMember) &#123;
    findMember.editable = false
    $q.sessionStorage.set('members', members)
  &#125;
&#125;
        </textarea>
      </Code>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;!-- App.vue --&#62;

&#60;q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="store(m.mid)" /&#62;
        </textarea>
      </Code>
      <p><em>&#60;script setup&#62;</em> 하단에 <code>store</code>라는 새 메서드를 추가하고, 체크 버튼의 이벤트 리스너로 사용합니다. 이제 멤버 카드 수정 모드에서
        <q-btn dense round icon="check" color="primary" size="sm" /> 버튼을 클릭하면 <code>mid</code> 값을
        전달해 해당 멤버 카드를 비수정 모드로 전환하고 <em>members</em> 전체 데이터를 로컬 세션 스토리지에 'members'라는 키값으로 저장합니다.
      </p>
      <b>결과</b>
      <div class="row justify-end q-pb-sm">
        <q-btn dense icon="add" round color="positive" @click="addMember" />
      </div>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members" :key="m" class="col-6 col-md-4">
          <!-- 수정 모드 변경을 위해 버튼 추가 -->
          <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit"
            @click="m.editable = true" />
          <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="store(m.mid)" />
          <!-- @update 이벤트를 바인딩 -->
          <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable"
            @update="update" />
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p>멤버 추가 버튼을 클릭해 몇 개의 카드 정보를 추가하고 저장해 줍니다. 모든 것이 완벽해 보입니다! <strong>하지만 문제가 있습니다.</strong> 여러 개의 멤버 카드를 수정 모드로 전환한
        상태에서 특정 카드의 체크 버튼을 클릭할 경우 모든
        <em>members</em> 데이터를 저장하기 때문에
        수정 중인 다른 카드 정보까지 모두 업데이트가 되어버립니다. 페이지를 새로고침 했을 때 저장하지 않은 다른 멤버 카드는 기존 상태가 유지되도록 하려면 좀 더 디테일한 처리가 필요합니다.
      </p>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'vue'}">
        <textarea readonly>
// App.vue

// Member 정보를 세션 스토리지에 저장
const store = (mid) =&#62; &#123;
  // 로컬 세션 스토리지의 members 데이터를 임시로 가져옴
  const tempMembers = $q.sessionStorage.getItem('members') || []
  const findMember = members.find(m =&#62; m.mid === mid)
  // 임시로 가져온 데이터에서 해당 mid 멤버를 검색
  const findTempMember = tempMembers.find(m =&#62; m.mid === mid)

  if (findMember) &#123;
    findMember.editable = false

    // 기존 데이터에 현재 저장하려는 멤버의 데이터가 있을 경우 세부 정보를 업데이트
    if (findTempMember) &#123;
      findTempMember.name = findMember.name
      findTempMember.team = findMember.team
      findTempMember.contact = findMember.contact
    &#125;
    // 없는 경우 새로 추가
    else
      tempMembers.unshift(findMember)

    // 업데이트된 새 멤버 데이터를 로컬 세션 스토리지에 저장
    $q.sessionStorage.set('members', tempMembers)
  &#125;
&#125;
        </textarea>
      </Code>
      <p>store 메서드를 위와 같이 수정했습니다. 이제 임시로 로컬 세션 스토리지 데이터를 가져와 해당 멤버의 데이터를 찾아 업데이트하고 다시 저장하도록 처리해 주었습니다. 이제 저장되는 데이터의
        다른 멤버 카드 정보에 영향을 주지 않습니다.</p>
      <b>결과</b>
      <div class="row justify-end q-pb-sm">
        <q-btn dense icon="add" round color="positive" @click="addMember2" />
      </div>
      <div class="row q-col-gutter-lg">
        <div v-for="m in members2" :key="m" class="col-6 col-md-4">
          <!-- 수정 모드 변경을 위해 버튼 추가 -->
          <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit"
            @click="m.editable = true" />
          <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="store2(m.mid)" />
          <!-- @update 이벤트를 바인딩 -->
          <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable"
            @update="update2" />
        </div>
      </div>
      <p class="q-py-lg"></p>
      <p>문제가 생겼던 부분을 다시 테스트해봅시다. <strong>이제 각 멤버 카드 정보가 별개로 관리 및 저장됩니다</strong>.</p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="카드 수정하기" prev :to="{ name: 'edit' }" />
      </div>
    </div>
  </div>
</template>