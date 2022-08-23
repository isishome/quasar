import { createRouter, createWebHistory } from 'vue-router'
import { Platform } from 'quasar'
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
          resolve({ el: to.hash, top: store.offset + 20 })
        }
        else if (to.params.sid) {
          const store = useStore()
          resolve({ el: `#${to.params.sid}`, top: store.offset + 20 })
        }
        else
          resolve({ top: 0 })
      }, 200)
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

  const keywords = to.meta.keywords.join(', ')
  const keywordsMeta = document.createElement('meta')
  keywordsMeta.setAttribute('name', 'keywords')
  keywordsMeta.setAttribute('content', keywords)

  const oldKeywordsMeta = document.head.querySelector('meta[name="keywords"]')
  if (oldKeywordsMeta === null)
    document.head.appendChild(keywordsMeta)
  else
    oldKeywordsMeta.replaceWith(keywordsMeta)
})

router.afterEach(() => {
  if (!Platform.has.touch) {
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]')
      const store = useStore()
      store.setSections([...sections].map(s => ({ id: s.id, name: s.dataset.name, top: 0, intersecting: false, sub: s.hasAttribute('sub') })))
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          store.setIntersecting(entry.target.id, entry.isIntersecting)
          const scrollTop = entry.target.offsetTop - entry.boundingClientRect.top
          const filter = store.sections.filter(s => s.top > 0 && s.intersecting)
          store.setActive(entry.target.id)
          if (filter.length > 0)
            store.setActive(filter.reduce((prev, current) => Math.abs(prev.top - scrollTop) < Math.abs(current.top - scrollTop) ? prev : current).id)
        })
      }, {
        threshold: Array.from(Array(10), (_, x) => x * 0.1)
      })
      sections.forEach(section => {
        store.setTop(section.id, section.offsetTop + store.offset)
        io.observe(section)
      })
    }, 100)
  }
})