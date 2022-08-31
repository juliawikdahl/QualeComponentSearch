import { createRouter, createWebHistory} from 'vue-router'
import SignInPage from './SignInPage.vue'
import SearchMatchesPage from './SearchMatchesPage.vue'
import FunctionPage from './FunctionPage.vue'
import HomePage from './HomePage.vue'


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
      }
    ]
  })