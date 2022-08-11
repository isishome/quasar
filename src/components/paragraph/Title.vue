<script setup>
defineProps({
  head: {
    type: Boolean,
    default: false
  },
  sub: {
    type: Boolean,
    default: false
  },
  minor: {
    type: Boolean,
    default: false
  },
  arrow: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>
<template>
  <div v-if="head" class="text-h4 text-weight-bold q-py-lg" :class="`text-${color}`">
    <slot></slot>
  </div>
  <template v-else-if="sub">
    <div class="text-h5 text-weight-bold q-mt-xl q-pt-lg" :class="`text-${color}`">
      <slot></slot>
    </div>
    <q-separator class="q-mb-md" />
  </template>
  <p v-else-if="minor" class="q-mt-lg text-h6" :class="`text-${color}`">
    <slot></slot>
  </p>
  <div v-else-if="arrow" class="text-h6 q-mt-lg q-py-sm row items-center q-gutter-x-xs no-wrap"
    :class="`text-${color}`">
    <q-icon name="keyboard_double_arrow_right" />
    <div>
      <slot></slot>
    </div>
  </div>
</template>