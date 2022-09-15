<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import { uid } from 'quasar'

const members = reactive([
  { mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000', editable: false },
  { mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111', editable: false },
  { mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222', editable: false }
])

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
</script>
      
<template>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember" />
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m" class="col-6 col-md-4">
      <!-- 수정 모드 변경을 위해 버튼 추가 -->
      <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" />
      <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" />
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