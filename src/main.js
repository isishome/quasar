import { createApp } from 'vue'
import { Quasar, Cookies } from 'quasar'
import { router } from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(Quasar, {
  plugins: {
    Cookies
  }, // import Quasar plugins and add here
}).mount('#app')