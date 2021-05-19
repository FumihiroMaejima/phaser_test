/* eslint-disable @typescript-eslint/no-var-requires */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { IAppConfig } from '@/types'

const config: IAppConfig = require('@/config/data')

const app = createApp(App)

app.config.globalProperties.$AppConfig = config

app.use(store).use(router).mount('#app')

// require('@/assets/scss/App.scss')
