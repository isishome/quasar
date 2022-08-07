<script setup>
import { shallowReadonly } from 'vue'
const sites = shallowReadonly([
  { name: 'Vue.js', logo: 'images/sites/vuejs.svg', url: 'https://vuejs.org/' },
  { name: 'Quasar', logo: 'images/sites/quasar.svg', url: 'https://quasar.dev/' },
  { name: 'Vite', logo: 'images/sites/vite.png', url: 'https://vitejs.dev/' },
  { name: 'Vue Router', logo: 'images/sites/router.png', url: 'https://router.vuejs.org/' },
  { name: 'Pinia', logo: 'images/sites/pinia.svg', url: 'https://pinia.vuejs.org/' },
  { name: 'Axios', logo: 'images/sites/axios.svg', url: 'https://axios-http.com/kr/' },
  { name: 'Vue I18n', logo: 'images/sites/i18n.svg', url: 'https://vue-i18n.intlify.dev/' }
])
</script>

<template>
  <div class="text-center">
    <div class="q-py-lg q-px-sm q-gutter-y-md">
      <q-img src="images/quasar/logo-vertical.svg" width="40%" class="invert" />
      <div class="q-mt-xl text-primary text-weight-bold text-subtitle text-keep">빠른 시간에 높은 성능과 품질로 Vue.js&nbsp;3 사용자의
        인터페이스를
        손쉽게 구축
      </div>
      <div class="row justify-center q-gutter-x-sm">
        <q-btn unelevated color="primary" label="왜 퀘이사인가?" :to="{ name: 'why' }" />
      </div>
    </div>
    <p class="text-body1 text-keep">
      예전 회사에서 새로운 프레임워크를 공부할 기회가 있었는데 그게 vue.js였습니다.<br />
      매일 <strong>jquery</strong>와 에디터는 <strong>visual studio</strong>만
      쓰다가 작업 환경을 바꾸는 게 여간 어려운 일이 아니었습니다. 그리고 사용자 인터페이스의 부제를 해결하기 위해 어쩔 수 없이 <strong>quasar&nbsp;framework</strong>를 공부하게
      되었습니다.
    </p>
    <p class="text-h6 text-weight-bold text-keep">
      그런데 이것이 제 개발자 인생의 큰 전환점이 되었습니다.
    </p>
    <p class="text-body1 text-keep">
      기존에 시각적인 요소를 전부 디자이너에게 의존하던 것에서 벗어나,<br />
      좀 더 이쁘고, 사용하기 편하며, 반응형 웹을 제작할 때 들어가는 큰 수고스러움도 완화시켜주며,<br />
      무엇보다도 개발에 소요되는 시간을 크게 절약해 줍니다.
    </p>
    <p class="text-body1 text-keep">
      그동안 <strong>quasar&nbsp;framework</strong>를 사용하면서 중요한 부분이나 꼭 필요한 부분, 자주 사용하게 되는 컴포넌트나 플러그인 위주로 게시물을 작성해 갈 예정입니다.
      그래서 vue.js를 새로 시작하는 분들에게 많은 도움이 되길 바랍니다.
    </p>
    <p class="text-caption text-keep q-my-xl">
      이 사이트는 vue.js v3와 quasar framework v2를 이용해 제작되었으며,<br />
      사이트 성능에 영향을 주는 외부 폰트나 플러그인을 사용하지 않았습니다.
    </p>
    <div class="q-pt-xl text-keep">
      <div class="text-h6 text-weight-bold">vue.js를 사용하는데 도움을 주는 유용한 플러그인 또는 사이트</div>
      <div class="row justify-center items-start q-col-gutter-sm q-mt-sm">
        <div class="col-6 col-md-3" v-for="s in sites" :key="s.name">
          <q-btn class="fit" no-caps flat dense padding="0" :href="s.url" target="_blank" rel="noopener noreferrer">
            <q-card bordered square class="no-shadow fit bg-back">
              <q-card-section>
                <img :src="s.logo" width="100" height="100" />
              </q-card-section>
              <q-card-section class="text-h6">{{ s.name }}</q-card-section>
            </q-card>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.body--dark .invert {
  filter: hue-rotate(180deg) invert(100);
}
</style>