<script>
  import TreeView from './components/TreeView.vue'
  import HeaderVue from './components/Header.vue'

    export default {
    name: 'App',
    components: {
       HeaderVue,
       TreeView
     
    },
  }
  </script>

<template>
  <div class="Navbar">
   <headerVue title="Quale Consulting" />  <div class="Container">
    <TreeView />
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
