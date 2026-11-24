import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './styles/main.css'
import { inject } from '@vercel/analytics'

// Initialize Vercel Web Analytics
inject()

createApp(App).use(vuetify).mount('#app')
