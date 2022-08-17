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
          resolve({ el: `#${to.params.sid}`, top: store.offset })
        }
        else
          resolve({ top: 0 })
      }, 100)
    })
  }
})

router.beforeEach((to) => {
  const title = `${to.meta.title ? `${to.meta.title} | ` : ''}Sera\'s Quasar`
  document.title = title
  const ogTitle = document.createElement('meta')
  ogTitle.setAttribute('property', 'og:title')
  ogTitle.setAttribute('content', title)

  const oldOgTitle = document.head.querySelector('meta[property="og:title"]')
  if (oldOgTitle === null)
    document.head.appendChild(ogTitle)
  else
    oldOgTitle.replaceWith(ogTitle)
})

router.afterEach(async () => {
  await nextTick()
  const sections = document.querySelectorAll('section[id]')
  const store = useStore()
  store.setSections([...sections].map(s => ({ id: s.id, name: s.dataset.name, top: 0, sub: s.hasAttribute('sub') })))
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        store.setTop(entry.target.id, entry.target.offsetTop + store.offset)

        const scrollTop = entry.target.offsetTop - entry.boundingClientRect.top
        const filter = store.sections.filter(s => s.top > 0)
        if (filter.length > 0)
          store.setActive(filter.reduce((prev, current) => (Math.abs(prev.top - scrollTop) < Math.abs(current.top - scrollTop)) ? prev : current).id)
      }
    })
  }, {
    threshold: Array.from(Array(10), (_, x) => x * 0.1)
  })
  sections.forEach(section => io.observe(section))
})