<script>
    import SearchBar from './SearchBar.vue'
    export default {
        name : 'Header',
        props : ['title'],
        components: {
            SearchBar,
        }
    }
</script>


<template>
     <div class="Navbar">
        <h1 class="Title"> {{title}}</h1>
    </div>
    <SearchBar/>
</template>



<style>
.Title {
    display: flex;

}

.Navbar {
  display: flex;
  justify-content: space-around;
}
</style>
