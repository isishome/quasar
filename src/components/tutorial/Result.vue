<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import { uid, useQuasar } from 'quasar'

// $q 객체
const $q = useQuasar()

const members = reactive($q.sessionStorage.getItem('members') || [])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() => import('./Member.vue'))

// Member를 추가하는 메서드
const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '', editable: false })
}

// Member 정보를 수정하는 메서드
const update = (mid, key, val) => {
  const findMember = members.find(m => m.mid === mid)

  if (findMember)
    findMember[key] = val
}

// Member 정보를 세션 스토리지에 저장
const store = (mid) => {
  // 로컬 세션 스토리지의 members 데이터를 임시로 가져옴
  const tempMembers = $q.sessionStorage.getItem('members') || []
  const findMember = members.find(m => m.mid === mid)
  // 임시로 가져온 데이터에서 해당 mid 멤버를 검색
  const findTempMember = tempMembers.find(m => m.mid === mid)

  if (findMember) {
    findMember.editable = false

    // 기존 데이터에 현재 저장하려는 멤버의 데이터가 있을 경우 세부 정보를 업데이트
    if (findTempMember) {
      findTempMember.name = findMember.name
      findTempMember.team = findMember.team
      findTempMember.contact = findMember.contact
    }
    // 없는 경우 새로 추가
    else
      tempMembers.unshift(findMember)

    // 업데이트된 새 멤버 데이터를 로컬 세션 스토리지에 저장
    $q.sessionStorage.set('members', tempMembers)
  }
}
</script>
      
<template>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember" />
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m" class="col-6 col-md-4">
      <!-- 수정 모드 변경을 위해 버튼 추가 -->
      <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" />
      <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="store(m.mid)" />
      <!-- @update 이벤트를 바인딩 -->
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" :editable="m.editable" @update="update" />
    </div>
  </div>
  <Info>
    <p><b>Member 데이터</b></p>
    <p>
      {{members}}
    </p>
  </Info>
</template>