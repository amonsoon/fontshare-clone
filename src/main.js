import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index.js'
import './assets/global.css'

// pinia instance 
import { createPinia } from 'pinia'
const pinia = createPinia()





const app = createApp(App);
app.use(router)
app.use(pinia)

app.mount('#app');


