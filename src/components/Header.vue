<script>
    import SearchBar from './SearchBar.vue'
import SignInButton from './SignInButton.vue';
    export default {
        name : 'Header',
        props : ['title'],
        components: {
    SearchBar,
    SignInButton
}
    }
</script>


<template>
     <div class="Navbar">
        <h1 class="Title"> {{title}}</h1>
    <SearchBar/> 
    <SignInButton/>
    </div>

</template>



<style>
.Title {
    display: flex;

}

.Navbar {
  display: flex;
  justify-content: center;
}



</style>
