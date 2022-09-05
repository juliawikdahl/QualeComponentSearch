import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './components/Router'
import Modal from "vue-bs-modal";


createApp(App)
.use(router)
.mount('#app')
// App.use(Modal).mount("#app");