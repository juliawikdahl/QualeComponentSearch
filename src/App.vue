<script>
  import TreeView from './components/TreeView.vue'
  import HeaderVue from './components/Header.vue'

    export default {
    name: 'App',
    components: {
      TreeView,
      HeaderVue
    },
  }
  </script>

<template>
  <div class="Navbar container">
      <TreeView />
  <headerVue title="Quale Consulting" /> 
  </div>

  
</template>


<style scoped>

.Navbar {
  display: flex;
  justify-content: space-around;
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
