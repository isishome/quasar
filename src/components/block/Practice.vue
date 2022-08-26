<script setup>
import { ref } from 'vue'
const props = defineProps({
  options: {
    type: Array,
    default: () => {
      return []
    }
  },
  item: {
    type: String,
    default: 'code'
  }
})

const tab = ref(props.options.length > 0 ? props.options[0].value : '')
</script>
<template>
  <div class="practice">
    <q-option-group v-model="tab" inline size="xs" :options="options" class="q-mb-sm">
      <template #label="opt">
        <div class="col-12">
          <code v-if="item === 'code'">{{ opt.label }}</code>
          <div v-else>{{ opt.label }}</div>
        </div>
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
.practice {
  margin-bottom: 2rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .2);
  border-radius: 8px;
  padding: 10px;
}

.body--dark .practice {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .1);
}

.q-tab-panels {
  background-color: transparent;
}

.q-tab-panel {
  padding: 0;
  margin: 0 !important;
  overflow: hidden;
}

.practice:deep(.info) {
  background-color: transparent !important;
  padding: 0;
}

.practice:deep(.outer) {
  margin-top: 10px;
  margin-bottom: 0;
  background-color: transparent !important;
}

@media (max-width: 480px) {
  .practice:deep(.pre-wrap) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

.og:deep(.q-radio__inner) {
  font-size: 2em;
  height: 1em;
}
</style>