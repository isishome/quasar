<script setup>
import { defineAsyncComponent, ref, shallowReadonly } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const slide = ref('1')
const carousel = ref(null)
const trigger = () => {
  carousel.value.forEach(c => { c.next() })
}
const transitions = shallowReadonly([
  'slide-right', 'slide-left', 'slide-up', 'slide-down', 'fade', 'scale', 'rotate', 'flip-right', 'flip-left', 'flip-up', 'flip-down', 'jump-right', 'jump-left', 'jump-up', 'jump-down'
])
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Transitions</Title>
      <p>
        <code>transition-show</code>/<code>transition-hide</code> 또는
        <code>transition-prev</code>/<code>transition-next</code> 또는 간단하게 <code>transition</code>
        props를 사용하는 몇 가지
        Quasar 컴포넌트가 있습니다. 여기에서 이러한 props에 사용하는 몇 가지 transition을 보여드리겠습니다.
      </p>
      <div class="q-my-lg">
        <q-btn push color="primary" label="작동" @click="trigger" />
      </div>
      <div class="row q-gutter-sm q-mb-md">
        <q-card bordered flat v-for="(t, idx) in transitions" :key="idx">
          <q-card-section class="no-padding overflow-hidden">
            <q-carousel ref="carousel" height="140px" v-model="slide" :transition-next="t" animated
              control-color="primary" infinite>
              <q-carousel-slide name="1" class="no-padding">
                <q-img src="@/assets/images/sites/vuejs.svg" width="140px" :ratio="1" />
              </q-carousel-slide>
              <q-carousel-slide name="2" class="no-padding">
                <q-img src="@/assets/images/sites/quasar.svg" width="140px" :ratio="1" />
              </q-carousel-slide>
            </q-carousel>
          </q-card-section>
          <div class="text-center">{{ t }}</div>
        </q-card>
      </div>
      <p>transition props에 캡션에 표시된 이름을 사용하세요. 예제:</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;q-menu
  transition-show="jump-down"
  transition-hide="jump-up"
/&#62;
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="스크린 플러그인" prev :to="{ name: 'screen' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>