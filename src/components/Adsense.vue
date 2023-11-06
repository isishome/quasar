<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  dataAdClient: {
    type: String,
    required: true
  },
  dataAdSlot: {
    type: String,
    required: true
  },
  dataAdFormat: {
    type: String,
    default: null
  },
  dataAdtest: {
    type: Boolean,
    default: null
  },
  dataFullWidthResponsive: {
    type: String,
    default: null
  }
})
const insRef = ref(null)

const render = () => {
  const adsbygoogle = window.adsbygoogle || []
  if (insRef.value?.clientWidth + insRef.value?.clientHeight > 0) {
    adsbygoogle.push({})
  }
}

onMounted(() => {
  if (!window.adsbygoogle)
    window.addEventListener('load', render)
  else
    render()
})

onUnmounted(() => {
  window.removeEventListener('load', render)
})
</script>

<template>
  <ins ref="insRef" class="adsbygoogle ins" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
    :data-ad-format="dataAdFormat" :data-adtest="dataAdtest ? 'on' : null"
    :data-full-width-responsive="dataFullWidthResponsive"></ins>
</template>

<style scoped>
.ins {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .05) !important;
  background-color: rgba(0, 0, 0, .02) !important;
  position: relative;
  min-height: 200px;
}

.ins::after {
  content: '광고';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, .2);
}

.body--dark .ins {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .05) !important;
  background-color: rgba(255, 255, 255, .02) !important;
}

.body--dark .ins::after {
  color: rgba(255, 255, 255, .2);
}
</style>
