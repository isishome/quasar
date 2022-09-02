<script setup>
import { reactive, defineAsyncComponent } from 'vue'
import { uid } from 'quasar'

const members = reactive([
  { mid: uid(), name: '홍길동', team: '디자인 팀', contact: '010-0000-0000' },
  { mid: uid(), name: '뷔', team: '엔터테인먼트 팀', contact: '010-1111-1111' },
  { mid: uid(), name: '아이유', team: '가수 팀', contact: '010-2222-2222' }
])

// Member 컴포넌트를 가져옵니다.
const Member = defineAsyncComponent(() => import('./Member.vue'))

// Member를 추가하는 메서드
const addMember = () => {
  members.unshift({ mid: uid(), name: '', team: '', contact: '' })
}
</script>
  
  <template>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember" />
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m" class="col-6 col-md-4">
      <Member :mid="m.mid" :name="m.name" :team="m.team" :contact="m.contact" />
    </div>
  </div>
</template>