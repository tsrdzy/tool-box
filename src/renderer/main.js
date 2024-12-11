import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import i18n from './locals'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'


const app = createApp(App)
app.use(i18n)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
