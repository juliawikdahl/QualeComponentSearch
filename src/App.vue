<script>
  import TreeView from './components/TreeView.vue'
  import HeaderVue from './components/Header.vue'
  import SignInButton from './components/SignInButton.vue'

  import root from './components/Root.json'

  


    export default {
    name: 'App',
    data() {
        return{
          root,
      }
    },
    components: {

       HeaderVue,
       TreeView,
    }
}
      

  </script>

<template>
  <div>
    <router-link :to="{ path: '/HomePage.vue' }">   
      <HeaderVue logo="src\components\Pictures.svg\Quale_Logo.png" alt=""/> 
    </router-link> 
    <div class="Container">
      <TreeView :node="root.root" :shouldBeExpanded="true"/>
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
