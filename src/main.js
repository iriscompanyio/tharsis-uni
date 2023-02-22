import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import i18n from "./i18n"

import './assets/main.css'
import 'virtual:windi.css'

// const app = createApp(App)

// app.use(router)

// createApp(App).mount('#app')

createApp(App).
    use(router).
    use(i18n).
    mount('#app')