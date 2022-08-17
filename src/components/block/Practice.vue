<script setup>
import { ref } from 'vue'
const props = defineProps({
  options: Array,
  default: () => {
    return []
  }
})

const tab = ref(props.options.length > 0 ? props.options[0].value : '')
</script>
<template>
  <div>
    <q-option-group v-model="tab" inline size="xs" :options="options">
      <template #label="opt">
        {{ opt.label }}
      </template>
    </q-option-group>
    <q-tab-panels v-model="tab">
      <q-tab-panel v-for="o in options" :key="o.value" :name="o.value">
        <slot :name="o.value"></slot>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<style scoped>
.q-tab-panels {
  background-color: transparent;
}

.q-tab-panel {
  padding: 0;
  overflow: hidden;
}

@media (max-width: 480px) {
  .q-tab-panels {
    margin-left: -16px;
    margin-right: -16px;
  }

  .q-tab-panels:deep(.pre-wrap) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .q-tab-panel:deep(.outer) {
    margin-left: 16px;
    margin-right: 16px;
  }
}

.og:deep(.q-radio__inner) {
  font-size: 2em;
  height: 1em;
}
</style>