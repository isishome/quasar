<script setup>
import { ref } from 'vue'
import { useQuasar, copyToClipboard, colors } from 'quasar'

const { getPaletteColor } = colors
const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  textColor: {
    type: String,
    default: null
  },
  label: {
    type: String,
    default: ''
  },
  square: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'rgb'
  }
})
const $q = useQuasar()

const btn = ref(null)
const click = () => {
  if (btn.value) {
    const el = getComputedStyle(btn.value.$el)
    let val = el.getPropertyValue('background-color')
    if (props.type === 'hex')
      val = getPaletteColor(props.color)

    if (val) {
      copyToClipboard(val.trim())
        .then(() => {
          $q.notify({
            color: 'grey-10',
            textColor: 'yellow',
            message: val
          })
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            message: 'RGB 색상 클립보드 복사 실패'
          })
        })
    }
  }
}
</script>

<template>
  <q-btn ref="btn" no-caps dense unelevated :square="square" :color="color" :text-color="textColor" :label="label"
    class="no-hover" @click="click" />
</template>