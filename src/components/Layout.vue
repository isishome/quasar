<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useQuasar, uid } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

const prod = computed(() => import.meta.env.PROD)
const $q = useQuasar()
const screen = computed(() => $q.screen)
const route = useRoute()
const router = useRouter()
const routeName = computed(() => route.name)
const routes = router.getRoutes()

// top intersection
const scrollMove = ref(false)
const onHeaderIntersection = (entry) => {
  if (entry.rootBounds.width && entry.rootBounds.height)
    scrollMove.value = !entry.isIntersecting
}

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const rightDrawerOpen = ref(false)
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

const store = useStore()
const sections = computed(() => store.sections)
const myTweak = (offset) => {
  store.setOffset(offset)
}

const activeId = computed(() => store.active)
watch(() => activeId.value, (val, old) => {
  if (val && val !== old)
    history.replaceState({}, null, `#${val}`)
})


// toggle dark 
const toggleDark = () => {
  $q.dark.set(!$q.dark.isActive)
  $q.cookies.set('sq.dark', $q.dark.isActive, { path: import.meta.env.BASE_URL, expires: 365 })
}

const key = ref(uid())
const reload = () => {
  key.value = uid()
  nextTick(() => {
    onWindowLoad()
  })
}

watch(() => route.name, (val, old) => {
  if (val && val !== old)
    reload()
})

const onWindowLoad = () => {
  if (prod.value) {
    const adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({})
    adsbygoogle.push({})
  }
}

onMounted(() => {
  if (document.readyState !== 'complete')
    window.addEventListener("load", onWindowLoad)
  else {
    nextTick(() => {
      onWindowLoad()
    })
  }
})

onUnmounted(() => {
  window.removeEventListener("load", onWindowLoad)
})
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <div class="top-inter" v-intersection="onHeaderIntersection"></div>
    <q-header :class="['header', scrollMove ? 'scroll' : '']">
      <q-toolbar class="contents">
        <q-btn v-if="screen.lt.md" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <router-link class="title" :to="{ name: 'main' }">
            <div class="row items-center">
              Sera's Quasar
            </div>
          </router-link>
        </q-toolbar-title>
        <q-btn dense flat icon="dark_mode" @click="toggleDark" />
        <q-btn v-if="screen.lt.lg && sections.length > 0" dense flat icon="assignment" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer v-if="screen.lt.md" v-model="leftDrawerOpen" side="left" behavior="mobile">
      <div class="aside">
        <template v-for="r in routes" :key="r.name">
          <q-list v-if="r.path !== '/' && r.children.length > 0" dense class="full-width q-mb-sm">
            <q-item class="text-weight-bold">
              <q-item-label> {{ r.meta.title }}</q-item-label>
            </q-item>
            <q-item v-for="c in r.children" :key="c.name" tag="a" active-class="active" :active="routeName === c.name"
              @click="leftDrawerOpen = false" :to="{ name: c.name }"> {{ c.meta.title }}
            </q-item>
          </q-list>
        </template>
      </div>
    </q-drawer>
    <q-drawer v-if="screen.lt.lg && sections.length > 0" v-model="rightDrawerOpen" side="right" behavior="mobile">
      <div class="aside right text-weight-bold">
        <q-list v-if="sections.length > 0" dense>
          <q-item-label header class="header-title q-py-sm">단락</q-item-label>
          <q-item clickable v-for="section in sections" :key="section.id" tag="a" active-class="active"
            :active="section.id === activeId" @click="rightDrawerOpen = false" :to="{ params: { sid: section.id } }">
            {{ section.name }}
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <div class="row justify-center contents">
        <aside class="gt-sm col-2 row justify-end relative-position" style="min-width:250px">
          <div class="aside fixed-260 full-height scroll" style="overflow:scroll">
            <template v-for="r in routes" :key="r.name">
              <q-list v-if="r.path !== '/' && r.children.length > 0" dense class="full-width q-mb-sm">
                <q-item>
                  <q-item-label class="header-title q-py-xs"> {{ r.meta.title }}</q-item-label>
                </q-item>
                <q-item v-for="c in r.children" :key="c.name" tag="a" active-class="active"
                  :active="routeName === c.name" :to="{ name: c.name }"> {{ c.meta.title }}
                </q-item>
              </q-list>
            </template>
          </div>
        </aside>
        <q-page class="col page" :style-fn="myTweak">
          <router-view />
          <div class="q-py-xl"></div>
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5110777286519562"
            data-ad-slot="8610177982" data-ad-format="auto" data-full-width-responsive="true"
            :data-adtest="prod ? 'off' : 'on'" :key="key"></ins>
          <div class="q-py-lg"></div>
          <template v-if="route.name === 'main'">
            <q-separator />
            <div class="q-py-lg">
              <div class="row justify-center items-center q-gutter-x-xs text-caption bottom">
                <div>Copyright</div>
                <div>@</div>
                <div>2022</div>
                <div>SeraSome</div>
              </div>
            </div>
          </template>
        </q-page>
        <aside class="gt-md col-2 row justify-start relative-position block">
          <div class="aside right text-weight-bold" :style="`top: ${store.offset}px;`">
            <q-list v-if="sections.length > 0" dense>
              <q-item-label header class="header-title q-py-sm">단락</q-item-label>
              <q-item clickable v-for="section in sections" :key="section.id" tag="a" active-class="active"
                :active="section.id === activeId" :to="{ params: { sid: section.id } }">
                {{ section.name }}
              </q-item>
            </q-list>
            <q-list dense class="q-mt-xl">
              <q-item>
                <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px"
                  data-ad-client="ca-pub-5110777286519562" data-ad-slot="7240136439" :data-adtest="prod ? 'off' : 'on'"
                  :key="key"></ins>
              </q-item>
            </q-list>
          </div>
        </aside>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style>
:root {
  --q-primary: #00b4ff !important;
  --q-primary-alpha: #00b4ff35 !important;
  --q-secondary: #26A69A;
  --q-accent: #9C27B0;
  --q-positive: #21BA45;
  --q-negative: #C10015;
  --q-info: #31CCEC;
  --q-warning: #F2C037;
  --q-dark: #1d1d1d;
  --q-dark-page: #121212;
  --q-back: rgba(0, 0, 0, .03);
  --q-dark-back: rgba(255, 255, 255, .05);
  --q-text: rgba(33, 53, 71, 1) !important;
  --q-dark-text: rgba(255, 255, 255, .87) !important;
}

body {
  overflow-y: scroll;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  letter-spacing: .2px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  transition: color .5s, background-color .5s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.body--light {
  color: var(--q-text);
}

.body--dark {
  color: var(--q-dark-text);
  background-color: rgba(26, 26, 26, 1) !important;
}

.text-default {
  color: var(--q-text) !important;
}

.body--dark .text-default {
  color: var(--q-dark-text) !important;
}

blockquote {
  box-shadow: inset 4px 0 0 0 rgba(100, 150, 200, 1);
  padding: 1rem 1rem 1rem 2em;
  margin: 2rem 0;
  background-color: rgba(0, 0, 0, .03);
  border-radius: 0 4px 4px 0;
}

em {
  font-style: normal !important;
  margin: 0 .2rem;
  padding: .1em .2rem;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
}

.body--dark em {
  background-color: rgba(255, 255, 255, .2);
}

.text-keep {
  word-break: keep-all;
}

.text-body2,
p {
  line-height: 1.7 !important;
  letter-spacing: .2px !important;
}

strong {
  text-shadow: 0 0 0 rgba(33, 53, 71, .1);
}

.body--dark strong {
  text-shadow: 0 0 0 rgba(255, 255, 255, .87);
}

.bg-back {
  background-color: var(--q-back) !important;
}

.body--dark .bg-back {
  background-color: var(--q-dark-back) !important;
}

.q-separator--dark {
  background-color: rgba(255, 255, 255, .14);
}

p,
li {
  word-break: keep-all;
  overflow-wrap: break-word;
}

u {
  text-underline-offset: 2px;
}
</style>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.title {
  font-style: italic;
  font-weight: 700;
  letter-spacing: -1px;
  cursor: pointer;
}

.contents {
  max-width: 1400px;
  margin: 0 auto;
}

.top-inter {
  position: absolute;
  height: 0;
}

.header {
  transition: all .3s ease;
  background-color: var(--q-primary-alpha) !important;
  color: var(--q-primary);
}

.header.scroll {
  color: inherit;
  background-color: rgba(255, 255, 255, .5) !important;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, .08);
}

.body--dark .header.scroll {
  background-color: rgba(29, 29, 29, .5) !important;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, .08);
}

.aside.fixed-260 {
  width: 260px;
}

.aside {
  padding: 24px 32px 24px 5px;
  position: fixed;
}

.body--dark .aside {
  color-scheme: dark;
}

.q-list--dense:deep(a) {
  opacity: .5;
  font-size: 13px;
}

.q-list--dense:deep(.q-item),
.q-item--dense {
  min-height: 0;
}

.aside:deep(a) {
  transition: opacity .3s ease, color .3s ease;
}

.aside:deep(a.active),
.aside:deep(a:hover) {
  opacity: .8;
}

.aside:deep(a.active) {
  color: var(--q-primary);
}

.aside.right {
  position: sticky;
  bottom: 0;
}

.aside.right:deep(a.active) {
  opacity: .8;
  color: inherit !important;
}

.aside.right:deep(a.active::after) {
  content: '';
  position: absolute;
  top: 25%;
  left: 8px;
  width: 4px;
  height: 50%;
  background-color: var(--q-primary);
  border-radius: 2px;
}

.page {
  padding: 64px 96px 0 96px;
}

@media (max-width:1240px) {
  .page {
    padding: 32px 48px 0 48px;
  }
}

@media (max-width:640px) {
  .page {
    padding: 0;
  }
}

.q-hoverable:deep(.q-focus-helper) {
  display: none;
}

.header-title {
  color: inherit;
  font-size: 11px;
  letter-spacing: 1px;
  font-weight: 700;
}

.q-item {
  line-height: 1.6em;
}

ins {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .05) !important;
  background-color: rgba(0, 0, 0, .02);
  position: relative;
  min-height: 200px;
}

ins::after {
  content: '광고';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, .2);
}

.body--dark ins {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .05) !important;
  background-color: rgba(255, 255, 255, .02);
}

.body--dark ins::after {
  color: rgba(255, 255, 255, .2);
}

.bottom {
  color: rgba(0, 0, 0, .5);
}

.body--dark .bottom {
  color: rgba(255, 255, 255, .5);
}
</style>