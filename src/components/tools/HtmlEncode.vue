<script setup>
import { ref, computed } from 'vue'

const plainText = ref('')
const encodingText = computed(() => plainText.value.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
  return '&#' + i.charCodeAt(0) + ';'
}))
</script>

<template>
  <div class="fit column q-gutter-y-sm">
    <q-input outlined rows="20" v-model="plainText" type="textarea" />
    <q-input outlined rows="20" v-model="encodingText" type="textarea" readonly />
  </div>

</template>