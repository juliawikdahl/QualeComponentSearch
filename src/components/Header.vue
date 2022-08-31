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
     <div>
        <h1> {{title}}</h1>
    </div>
</template>



<style>

</style>
