<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>
<template>
  <div class="note">
    <div class="box" :class="`bg-${color}`"></div>
    <div class="box right" :class="`bg-${color}`"></div>
    <div class="inner" :class="`bg-${color}`"></div>
    <slot>
    </slot>
  </div>
</template>
<style scoped>
.note {
  position: relative;
  margin: 16px 0 22px 0;
  padding: 16px 24px;
}

.note:deep(p) {
  padding-bottom: 8px;
  margin-bottom: 0;
}

.inner {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: .1;
}

.body--light .note:deep(em) {
  background-color: var(--q-primary);
  color: var(--q-dark-text);
}

.body--dark .inner {
  opacity: 1;
  background-color: rgba(255, 255, 255, .05) !important;
}

.box {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  opacity: .4;
}

.box.right {
  left: auto;
  right: 0;
}

.body--dark .box {
  opacity: 1;
  background-color: rgba(255, 255, 255, .1) !important;
}
</style>