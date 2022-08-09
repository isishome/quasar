<script setup>
import { shallowReadonly } from 'vue'
const sites = shallowReadonly([
  { name: 'Vue.js', logo: 'images/sites/vuejs.svg', url: 'https://vuejs.org/' },
  { name: 'Quasar', logo: 'images/sites/quasar.svg', url: 'https://quasar.dev/' },
  { name: 'Vite', logo: 'images/sites/vite.png', url: 'https://vitejs.dev/' },
  { name: 'Vue Router', logo: 'images/sites/router.png', url: 'https://router.vuejs.org/' },
  { name: 'Pinia', logo: 'images/sites/pinia.svg', url: 'https://pinia.vuejs.org/' },
  { name: 'Axios', logo: 'images/sites/axios.svg', url: 'https://axios-http.com/kr/' },
  { name: 'Vue I18n', logo: 'images/sites/i18n.svg', url: 'https://vue-i18n.intlify.dev/' },
  { name: 'Javascript', logo: 'images/sites/js.svg', url: 'https://javascript.info/' },
])
</script>

<template>
  <div class="text-center text-body1">
    <div class="q-py-lg q-px-sm q-gutter-y-md">
      <q-img src="images/quasar/logo-vertical.svg" width="40%" class="invert" />
      <div class="q-mt-xl text-primary text-weight-bold text-subtitle text-keep">
        빠른 시간에 높은 성능과 품질로 Vue.js&nbsp;3 사용자의 인터페이스를 손쉽게 구축
      </div>
      <div class="row justify-center q-gutter-x-sm">
        <q-btn unelevated color="primary" label="왜 퀘이사인가?" :to="{ name: 'why' }" />
      </div>
    </div>
    <p>
      예전 회사에서 새로운 프레임워크를 공부할 기회가 생겼는데 그때 시작한 게 <strong>vue.js</strong>였습니다.<br />
      그전까지는 <strong>visual studio</strong>를 이용해 <strong>asp.net</strong>과 <strong>jquery</strong>로 프로젝트를 진행했었는데 갑자기
      새 작업 환경을 구축하려고 보니 여간 어려운 게 아니었습니다. 거기에 더해 좀 더 나은 사용자 인터페이스를 제공하고자 <strong>quasar&nbsp;framework</strong>를
      도입하게 되면서 처음 만나게 되었죠.
    </p>
    <p class="text-h6 text-weight-bold">
      그런데 이것이 제 개발 스타일에 엄청난 변화를 가져왔습니다.
    </p>
    <p>
      기존에 시각적인 요소를 전부 디자이너에게 의존하던 것에서 벗어나<br />
      <u>수려한 레이아웃을 구현해 주며</u>,<br />
      <u>사용하기 편하고</u>,<br />
      <u>반응형 웹을 제작할 때 들어가는 큰 수고스러움도 완화</u>시켜주며,<br />
      <u>무엇보다도 개발에 소요되는 시간을 크게 절약</u>해 주었죠.
    </p>
    <p>
      그동안 quasar를 사용하면서 중요하다고 생각한 부분과, 자주 사용하게 되는 컴포넌트나 플러그인 위주로 포스팅할 예정입니다. 그래서 vue.js를 새로 시작하는 분들에게 많은 도움이 되길 바랍니다.
    </p>
    <em class="text-caption text-keep q-my-xl q-pa-md">
      이 사이트는 vue.js v3와 quasar framework v2를 이용해 제작되었으며, 사이트 성능에 영향을 주는 외부 폰트나 불필요한 플러그인의 사용을 최소화했습니다.
    </em>
    <div class="q-pt-xl text-keep">
      <div class="text-h6 text-weight-bold">vue.js를 사용하는데 유용한 사이트와 플러그인</div>
      <div class="row justify-center items-start q-col-gutter-sm q-mt-sm">
        <div class="col-6 col-md-3" v-for="s in sites" :key="s.name">
          <q-btn class="fit" no-caps flat dense padding="0" :href="s.url" target="_blank" rel="noopener noreferrer">
            <q-card bordered square class="no-shadow fit bg-back">
              <q-card-section>
                <img :src="s.logo" width="100" height="100"
                  :class="['Quasar', 'Javascript'].includes(s.name) ? 'invert' : ''" />
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

p {
  word-break: keep-all;
}
</style>