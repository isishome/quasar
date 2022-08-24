<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useQuasar, uid } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

const prod = computed(() => import.meta.env.PROD)
const $q = useQuasar()
const screen = computed(() => $q.screen)
const touch = computed(() => $q.platform.has.touch)
const route = useRoute()
const router = useRouter()
const routeName = computed(() => route.name)
const routes = router.getRoutes()

// change md width
$q.screen.setSizes({ md: touch.value ? 700 : 960 })

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
  document.documentElement.style.setProperty('color-scheme', $q.dark.isActive ? 'dark' : 'light')
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
    <div class="top-inter" v-intersection="!touch ? onHeaderIntersection : undefined"></div>
    <q-header :class="['header', scrollMove ? 'scroll' : '', touch ? 'touch' : '']">
      <q-toolbar class="contents">
        <q-btn v-if="screen.lt.md" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="title">
          <router-link :to="{ name: 'main' }">
            <div class="row items-center">
              Sera's Quasar
            </div>
          </router-link>
        </q-toolbar-title>
        <q-btn dense flat icon="dark_mode" @click="toggleDark" />
        <q-btn v-if="!touch && screen.lt.lg && sections.length > 0" dense flat icon="assignment"
          @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer v-if="screen.lt.md" v-model="leftDrawerOpen" side="left" behavior="mobile" no-swipe-open no-swipe-close>
      <div class="aside mobile">
        <template v-for="r in routes" :key="r.name">
          <q-list v-if="r.path !== '/' && r.children.length > 0 && r.path !== '/tools'" dense
            class="full-width q-mb-md">
            <q-item class="text-weight-bold">
              <q-item-label>{{ r.meta.title }}<span v-if="r.meta.working" style="opacity:.5"> [예정]</span></q-item-label>
            </q-item>
            <template v-for="c in r.children" :key="c.name">
              <q-item :disable="c.meta.working" tag="a" active-class="active" :active="routeName === c.name"
                @click="leftDrawerOpen = false" :to="{ name: c.name }"> {{ c.meta.title
                }}<span v-if="c.meta.working" style="opacity:.5">&nbsp;[예정]</span>
              </q-item>
            </template>
          </q-list>
        </template>
      </div>
    </q-drawer>
    <q-drawer v-if="!touch && screen.lt.lg && sections.length > 0" v-model="rightDrawerOpen" side="right"
      behavior="mobile" no-swipe-open no-swipe-close>
      <div class="aside mobile right text-weight-bold">
        <q-list v-if="sections.length > 0" dense>
          <q-item-label header class="header-title q-py-sm">단락</q-item-label>
          <q-item clickable v-for="section in sections" :key="section.id" tag="a" :inset-level="section.sub ? .2 : 0"
            active-class="active" :active="section.id === activeId" @click="rightDrawerOpen = false"
            :to="{ params: { sid: section.id } }">
            {{ section.name }}
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <div class="row justify-center contents">
        <aside v-if="screen.gt.sm" class="col-2 row justify-end relative-position" style="min-width:250px">
          <div class="aside fixed-260 full-height scroll" style="overflow:scroll">
            <template v-for="r in routes" :key="r.name">
              <q-list v-if="r.path !== '/' && r.children.length > 0 && r.path !== '/tools'" dense
                class="full-width q-mb-md">
                <q-item>
                  <q-item-label class="header-title q-py-xs">{{ r.meta.title }}<span v-if="r.meta.working"
                      style="opacity:.5"> [예정]</span></q-item-label>
                </q-item>
                <template v-for="c in r.children" :key="c.name">
                  <q-item :disable="c.meta.working" tag="a" active-class="active" :active="routeName === c.name"
                    :to="{ name: c.name }">
                    {{ c.meta.title }}<span v-if="c.meta.working" style="opacity:.5">&nbsp;[예정]</span>
                  </q-item>
                </template>
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
        <aside v-if="!touch" class="gt-md col-2 row justify-start relative-position block">
          <div class="aside right text-weight-bold" :style="`top: ${store.offset}px;`">
            <q-list v-if="sections.length > 0" dense>
              <q-item-label header class="header-title q-py-sm">단락</q-item-label>
              <q-item clickable v-for="section in sections" :key="section.id" tag="a"
                :inset-level="section.sub ? .2 : 0" active-class="active" :active="section.id === activeId"
                :to="{ params: { sid: section.id } }">
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

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.title {
  padding-left: 24px;
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

.header.touch {
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}

.aside {
  padding: 32px;
  position: fixed;
}

.aside.fixed-260 {
  width: 260px;
}

.aside.mobile {
  position: inherit !important;
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
  top: 20%;
  left: 8px;
  width: 4px;
  height: 50%;
  background-color: var(--q-primary);
  border-radius: 2px;
}

.page {
  padding: 64px 96px;
}

@media (max-width:1240px) {
  .page {
    padding: 32px 48px;
  }
}

@media (max-width:640px) {
  .page {
    padding: 32px 0;
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
  line-height: 1.8em;
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