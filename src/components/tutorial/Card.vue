<script setup>
import { defineAsyncComponent, } from 'vue'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>카드 만들기
      </Title>
      <p><code>&#60;q-card&#62;</code>를 이용해 간단한 레이아웃을 구성해 보도록 하겠습니다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;template&#62;
  &#60;q-card&#62;
    &#60;div class="text-center bg-primary text-white"&#62;멤버&#60;/div&#62;
    &#60;q-card-section&#62;
      홍길동
    &#60;/q-card-section&#62;
  &#60;/q-card&#62;
&#60;/template&#62;
  </textarea>
      </Code>
      <p><b>결과</b></p>
      <q-card>
        <div class="text-center bg-primary text-white">멤버</div>
        <q-card-section>
          홍길동
        </q-card-section>
      </q-card>
    </section>
  </div>
</template>

<style scoped>
</style>