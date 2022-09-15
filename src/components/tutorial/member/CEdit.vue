<script setup>
import { ref } from 'vue'

const props = defineProps({
  mid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  team: {
    type: String,
    default: ''
  },
  contact: {
    type: String,
    default: ''
  },
  // 수정 모드를 변경하기 위한 props
  editable: {
    type: Boolean,
    default: false
  }
})

// 컴포넌트 내부에서 사용할 멤버 데이터
const _name = ref(props.name)
const _team = ref(props.team)
const _contact = ref(props.contact)
</script>
    
<template>
  <q-card>
    <div class="text-center bg-primary text-white">멤버</div>
    <q-card-section>
      <q-input v-model="_name" :readonly="!editable" dense :borderless="!editable" />
      <q-input v-model="_team" :readonly="!editable" dense :borderless="!editable" />
      <q-input v-model="_contact" :readonly="!editable" dense :borderless="!editable" />
    </q-card-section>
  </q-card>
</template>
    
<style scoped>

</style>