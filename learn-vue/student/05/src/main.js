import { createApp } from 'vue'
import App2 from './App-2.vue'
import router from './router'

const app = createApp(App2)
app.use(router)
app.mount('#app')
