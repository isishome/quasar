<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Transitions</Title>
      <p>
        작성 예정입니다.
      </p>

    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="스크린 플러그인" prev :to="{ name: 'screen' }" />
        <Move label="Flexbox 소개" next :to="{ name: 'flexbox' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>