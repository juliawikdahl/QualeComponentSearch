import { createRouter, createWebHistory} from 'vue-router'
import SignInPage from './SignInPage.vue'
import SearchMatchesPage from './SearchMatchesPage.vue'
import ComponentPage from './ComponentPage.vue'
import HomePage from './HomePage.vue'
import AddComponentPage from './AddComponentPage.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/signinpage',
        component: SignInPage,
      },
      {
        path: '/searchmatchespage',
        component: SearchMatchesPage,
      },
      {
        path: '/componentpage',
        component: ComponentPage,
      },
      {
        path: '/homepage',
        component: HomePage,
      },
      {
        path: '/addcomponentpage',
        component: AddComponentPage,
      }
    ]
  })