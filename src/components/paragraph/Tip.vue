<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  },
  knowledge: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="outer q-my-md" :class="`bg-${color}`">
    <div class="tip q-pt-md q-px-md">
      <div v-if="label" class="row items-center q-gutter-x-xs q-mb-sm">
        <q-icon flat name="o_info" :color="color" />
        <b>{{ label }}</b>
      </div>
      <div v-else-if="knowledge" class="row items-center q-gutter-x-xs q-mb-sm">
        <q-avatar size="28px">
          <img src="@/assets/images/seraq.svg" />
        </q-avatar>
        <div class="text-subtitle1 text-weight-bold text-teal-4">Sera's Knowledge</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.tip {
  position: relative;

  padding: 20px 24px 4px 42px;
  background-color: rgb(250, 250, 250);
  border-radius: 7px;
  overflow-x: auto;
}

.body--dark .tip {
  background-color: rgb(24, 24, 24);
}

.outer {
  border-radius: 8px;
  margin: 28px 0;
  padding: 1px !important;
}
</style>