<script>
  import TreeView from './components/TreeView.vue'
  import HeaderVue from './components/Header.vue'
  import SignInButton from './components/SignInButton.vue'
<<<<<<< HEAD
  import root from './components/Root.json'
=======
import QualeLogo from './components/icons/QualeLogo.vue'
  
>>>>>>> 47e77262cc6dd6dbd11704c013b54c450f812813

    export default {
    name: 'App',
    data() {
        return{
          root,
      }
    },
    components: {
<<<<<<< HEAD
       HeaderVue,
       TreeView,
    }
=======
    HeaderVue,
    TreeView,
    QualeLogo
}
      
>>>>>>> 47e77262cc6dd6dbd11704c013b54c450f812813
  }
  </script>

<template>
  <div>
<<<<<<< HEAD
   <HeaderVue title="Quale Consulting" /> 
=======
    <router-link :to="{ path: '/HomePage.vue' }">   
      <HeaderVue logo="src\components\Pictures.svg\Quale_Logo.png" alt=""/>" 
    </router-link> 
>>>>>>> 47e77262cc6dd6dbd11704c013b54c450f812813
    <div class="Container">
      <TreeView :node="root.root"/>
   <Router-view/>

  </div>
</div>

  
</template>


<style scoped>
.Container{
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
