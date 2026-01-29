import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'leaflet/dist/leaflet.css' // Crucial for the map!

const app = createApp(App)
app.use(store)
app.mount('#app')
