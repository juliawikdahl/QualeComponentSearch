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
   <HeaderVue title="Quale Consulting" /> 
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
