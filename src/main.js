import { createApp } from 'vue'
import { Quasar, Cookies, Notify, Loading } from 'quasar'
import { router } from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Link from '@/components/paragraph/Link.vue'
import Title from '@/components/paragraph/Title.vue'
import Move from '@/components/paragraph/Move.vue'
import Note from '@/components/paragraph/Note.vue'
import Info from '@/components/paragraph/Info.vue'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(Quasar, {
  plugins: { Cookies, Notify, Loading } // import Quasar plugins and add here
})
  .component('Link', Link)
  .component('Title', Title)
  .component('Move', Move)
  .component('Note', Note)
  .component('Info', Info)
  .mount('#app')