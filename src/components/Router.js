import { createRouter, createWebHistory} from 'vue-router'
import SignInPage from './SignInPage.vue'
import SearchMatchesPage from './SearchMatchesPage.vue'
import FunctionPage from './FunctionPage.vue'
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
        path: '/functionpage',
        component: FunctionPage,
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