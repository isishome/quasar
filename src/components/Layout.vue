<script setup>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/store'

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

const activeId = computed(() => store.sections.find(s => s.active) ? store.sections.find(s => s.active).id : null)
watch(() => activeId.value, (val, old) => {
  if (val && val !== old)
    history.replaceState({}, null, `#${val}`)
})

const toggleDark = () => {
  $q.dark.set(!$q.dark.isActive)
  document.documentElement.style.colorScheme = $q.dark.isActive ? 'dark' : 'light'
}

</script>
<template>
  <q-layout view="hHh lpR fFf">
    <div class="top-inter" v-intersection="onHeaderIntersection"></div>
    <q-header :class="['header', scrollMove ? 'scroll' : '']">
      <q-toolbar class="contents">
        <q-btn v-if="screen.lt.md" dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <router-link class="title" :to="{ name: 'intro' }">
            Sera's Quasar
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
            <q-item v-for="c in r.children" :key="c.name">
              <q-item-section class="no-padding no-margin">
                <router-link :class="routeName === c.name ? 'active' : ''" :to="{ name: c.name }">
                  {{ c.meta.title }}
                </router-link>
              </q-item-section>
            </q-item>
          </q-list>
        </template>
      </div>
    </q-drawer>
    <q-drawer v-if="screen.lt.lg && sections.length > 0" v-model="rightDrawerOpen" side="right" behavior="mobile">
      <div class="aside right">
        <q-list dense>
          <q-item clickable v-for="section in sections" :key="section.id" class="text-caption"
            @click="rightDrawerOpen = false">
            <router-link :class="section.active ? 'active' : ''" :to="{ params: { sid: section.id } }" replace>
              {{ section.name }}
            </router-link>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <div class="row justify-center contents">
        <aside v-if="screen.gt.sm" class="col-2 row justify-end relative-position" style="min-width:250px">
          <div class="aside wide full-height scroll" style="overflow:scroll">
            <template v-for="r in routes" :key="r.name">
              <q-list v-if="r.path !== '/' && r.children.length > 0" dense class="full-width q-mb-sm">
                <q-item>
                  <q-item-label class="header-title"> {{ r.meta.title }}</q-item-label>
                </q-item>
                <q-item v-for="c in r.children" :key="c.name">
                  <q-item-section class="no-padding no-margin">
                    <router-link :class="routeName === c.name ? 'active' : ''" :to="{ name: c.name }"> {{ c.meta.title
                    }}
                    </router-link>
                  </q-item-section>
                </q-item>
              </q-list>
            </template>
          </div>
        </aside>
        <q-page class="col page" :style-fn="myTweak">
          <router-view />
        </q-page>
        <aside v-if="screen.gt.md" class="col-2 row justify-start relative-position">
          <div class="aside wide right text-weight-bold">
            <q-list v-if="sections.length > 0" dense>
              <q-item-label header class="header-title q-py-sm">단락</q-item-label>
              <q-item clickable v-for="section in sections" :key="section.id" tag="a" active-class="active"
                :active="section.active" @click="rightDrawerOpen = false" :to="{ params: { sid: section.id } }">
                {{ section.name }}
              </q-item>
            </q-list>
            <q-list dense>
              <q-item-label header class="header-title q-py-sm q-mt-md">광고</q-item-label>
              <div class="full-width bg-grey-1" style="height:600px"></div>
            </q-list>
            <q-list dense>
              <q-item-label header class="header-title q-py-sm q-mt-md">광고</q-item-label>
              <div class="full-width bg-grey-1" style="height:200px"></div>
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
}

body {
  overflow-y: scroll;
}

.body--light {
  color: rgba(20, 20, 20, 1) !important;
}

.body--dark {
  background-color: rgba(30, 30, 30, 1) !important;
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
  background-color: inherit !important;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, .08);
}

.body--dark .header.scroll {
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, .08);
}

.aside.wide {
  width: 250px;
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

.aside.right:deep(a.active) {
  opacity: .8;
  color: inherit !important;
}

.aside.right:deep(a.active::after) {
  content: '';
  position: absolute;
  top: 20%;
  left: 4px;
  width: 4px;
  height: 60%;
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
  line-height: 24px;
}
</style>