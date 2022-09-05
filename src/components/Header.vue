<script>
    import SearchBar from './SearchBar.vue';
    import SignInButton from './SignInButton.vue';
    import Quale_logo from './Pictures.svg/Quale_Logo.png';
import QualeLogo from './icons/QualeLogo.vue';
    import Comp from './JsonFiles/Component.json';
    
export default {
        name : 'Header',
        props : {
            logo: String
        },
        components: {
    SearchBar,
    SignInButton,
  
}
    }
</script>


<template>
     <div class="Navbar">
        <img :src="logo"/>
    <SearchBar :list="Comp"/> 
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
  background-color: rgba(15, 15, 15, 0.867);
  padding: 30px;
}



</style>
