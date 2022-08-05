import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useStore } from '@/store'

// Create Router
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          const store = useStore()
          resolve({ el: to.hash, top: store.offset })
        }
        else if (to.params.sid) {
          const store = useStore()
          resolve({ el: `#${to.params.sid}`, top: store.offset, behavior: 'smooth' })
        }
        else
          resolve({ top: 0 })
      }, 100)
    })
  }
})

router.beforeEach((to) => {

})

router.afterEach(async (to) => {
  const title = `${to.meta.title ? `${to.meta.title} | ` : ''}SeraSome\'s Quasar`
  document.title = title
  const ogTitle = document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  ogTitle.setAttribute('content', title)

  const oldOgTitle = document.head.querySelector('meta[property="og:title"]')
  if (oldOgTitle === null)
    document.head.appendChild(ogTitle)
  else
    oldOgTitle.replaceWith(ogTitle)

  await nextTick()
  const sections = document.querySelectorAll('section[id]')
  const store = useStore()
  store.setSections([...sections].map(s => ({ id: s.id, name: s.dataset.name, active: false })))
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const state = entry.intersectionRatio > .5
      if (store.section(entry.target.id) !== state)
        store.setActive(entry.target.id, state)
    })
  }, { threshold: [.3, .7] })
  sections.forEach(section => io.observe(section))
})