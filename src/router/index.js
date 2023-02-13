import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useStore } from '@/store'

// sleep
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// Create Router
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    return new Promise(async (resolve) => {
      const store = useStore()
      await sleep(300)
      if (to.hash)
        resolve({ el: to.hash, top: store.offset + 20, behavior: 'smooth' })
      else
        resolve({ top: 0, behavior: 'smooth' })
    })
  }
})

router.beforeEach((to, from) => {
  const store = useStore()
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

  const descList = to.matched.filter(r => r.meta && r.meta.desc)
  const desc = to.meta.desc || descList.length > 0 ? descList[0].meta.desc : 'Sera\'s Quasar Study!'
  const description = document.createElement('meta')
  description.setAttribute('name', 'description')
  description.setAttribute('content', desc)

  const oldDescription = document.head.querySelector('meta[name="description"]')
  if (oldDescription === null)
    document.head.appendChild(description)
  else
    oldDescription.replaceWith(description)

  const ogDescription = document.createElement('meta')
  ogDescription.setAttribute('property', 'og:description')
  ogDescription.setAttribute('content', desc)

  const oldOgDescription = document.head.querySelector('meta[property="og:description"]')
  if (oldOgDescription === null)
    document.head.appendChild(ogDescription)
  else
    oldOgDescription.replaceWith(ogDescription)

  const canonicalLink = document.createElement('link')
  canonicalLink.setAttribute('rel', 'canonical')
  canonicalLink.setAttribute('href', `${location.origin}${to.path}`)

  const oldCanonicalLink = document.head.querySelector('link[rel="canonical"]')
  if (oldCanonicalLink === null)
    document.head.appendChild(canonicalLink)
  else
    oldCanonicalLink.replaceWith(canonicalLink)

  if (to.name !== from.name)
    store.setSections([])
})

router.afterEach(async () => {
  await nextTick()
  await sleep(200)
  const sections = document.querySelectorAll('section[id]')
  const store = useStore()
  store.setSections([...sections].map(s => ({ id: s.id, name: s.dataset.name, top: s.offsetTop + store.offset, sub: s.hasAttribute('sub') })))
})