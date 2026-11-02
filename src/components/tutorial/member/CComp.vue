<script setup>
defineProps({
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
  }
})
</script>
  
<template>
  <q-card>
    <div class="text-center bg-primary text-white">멤버</div>
    <q-card-section>
      <div>{{ name }}</div>
      <div>{{ team }}</div>
      <div>{{ contact }}</div>
    </q-card-section>
  </q-card>
</template>
  
<style scoped>

</style>