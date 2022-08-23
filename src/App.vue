<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()
const isDark = $q.cookies.has('sq.dark') ? $q.cookies.get('sq.dark').toString() === 'true' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
$q.dark.set(isDark)
document.documentElement.style.setProperty('color-scheme', isDark ? 'dark' : 'light')
</script>
<template>
  <router-view />
</template>