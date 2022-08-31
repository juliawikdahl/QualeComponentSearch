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
        <h1 class="Title"> {{title}}</h1>
    </div>
</template>



<style>
.Title {
    display: flex;
    
}

</style>
