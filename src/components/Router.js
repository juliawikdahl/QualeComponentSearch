import { createRouter, createWebHistory} from 'vue-router'
import SignInPage from './SignInPage.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/signinpage',
        component: SignInPage,
      }
    ]
  })