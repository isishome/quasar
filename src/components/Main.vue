<script setup>
import vuejsImg from '@/assets/images/sites/vuejs.svg?url'
import quasarImg from '@/assets/images/sites/quasar.svg?url'
import viteImg from '@/assets/images/sites/vite.webp?url'
import routerImg from '@/assets/images/sites/router.webp?url'
import piniaImg from '@/assets/images/sites/pinia.svg?url'
import axiosImg from '@/assets/images/sites/axios.svg?url'
import i18nImg from '@/assets/images/sites/i18n.svg?url'
import jsImg from '@/assets/images/sites/js.svg?url'
import { shallowReadonly } from 'vue'

const sites = shallowReadonly([
  { name: 'Vue.js', logo: vuejsImg, url: 'https://vuejs.org/' },
  { name: 'Quasar', logo: quasarImg, url: 'https://quasar.dev/' },
  { name: 'Vite', logo: viteImg, url: 'https://vitejs.dev/' },
  { name: 'Vue Router', logo: routerImg, url: 'https://router.vuejs.org/' },
  { name: 'Pinia', logo: piniaImg, url: 'https://pinia.vuejs.org/' },
  { name: 'Axios', logo: axiosImg, url: 'https://axios-http.com/kr/' },
  { name: 'Vue I18n', logo: i18nImg, url: 'https://vue-i18n.intlify.dev/' },
  { name: 'Javascript', logo: jsImg, url: 'https://javascript.info/' },
])
</script>

<template>
  <div class="text-center text-body1 q-px-md">
    <div class="q-py-lg q-px-sm q-gutter-y-md">
      <q-img src="@/assets/images/quasar/logo-vertical.svg" width="40%" class="invert" />
      <div class="q-mt-xl text-primary text-weight-bold text-subtitle text-keep">
        빠른 시간에 높은 성능과 품질로 Vue.js&nbsp;3 사용자의 인터페이스를 손쉽게 구축
      </div>
      <div class="row justify-center q-gutter-x-sm">
        <q-btn unelevated color="primary" label="왜 Quasar인가?" :to="{ name: 'why' }" />
        <q-btn outline class="arrow" color="primary" :to="{ name: 'start' }">
          <div class="row justify-center items-center q-gutter-x-xs">
            <div>시작하기</div>
            <q-icon size="xs" name="arrow_forward" />
          </div>
        </q-btn>
      </div>
    </div>
    <p class="q-mt-lg">
      예전 회사에서 새로운 프레임워크로 프로젝트를 진행할 기회가 생겼는데 그때 시작한 게 <strong class="text-green-7">vue.js</strong>였습니다.<br />
      visual studio로 asp.net과 jquery만 줄 곳 사용하다 보니 새 작업 환경을 구축하는 게 여간
      어려운 일이 아니었죠. 거기에 좀 더 나은 UI(사용자 인터페이스)를 만들어보고 싶어 프레임워크를 찾아보게 되었습니다.
      그러다 <strong class="text-primary">quasar&nbsp;framework</strong>를 처음 만나게 되었습니다.
    </p>
    <p class="text-h6 text-weight-bold">
      그런데 이것이 제 개발 인생에 엄청난 변화를 가져왔습니다.
    </p>
    <p>
      시각적인 요소를 전부 디자이너에게 의존하던 것에서 벗어나<br />
      <u>보기 좋은 레이아웃을 구현해 주며</u>,<br />
      <u>사용성도 좋고</u>,<br />
      <u>반응형 웹을 제작할 때 들어가는 큰 수고스러움도 줄여주며</u>,<br />
      <u>무엇보다도 개발에 소요되는 시간을 크게 절약할 수 있게 되었죠.</u>
    </p>
    <p>
      그동안 quasar를 사용하면서 중요하다고 생각한 부분과, 자주 사용하게 되는 컴포넌트나 플러그인 위주로 포스팅할 예정입니다. 그래서 vue.js를 새로 시작하는 분들에게 많은 도움이 되길 바랍니다.
    </p>
    <tip>
      <p class="text-caption">
        이 사이트는 vue.js v3와 quasar framework v2를 이용해 제작되었으며, 사이트 성능에 영향을 주는 외부 폰트나 불필요한 플러그인의 사용을 최소화했습니다.</p>
    </tip>
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
  filter: hue-rotate(180deg) invert(100%);
}

.arrow:deep(i) {
  transition: transform .3s ease;
}

.arrow:hover:deep(i) {
  transform: translateX(20%);
}
</style>