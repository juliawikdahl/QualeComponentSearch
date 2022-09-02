<template>
    <router-link :to="{ path: '/signinpage' }"> <button class="btn">Sign In</button></router-link>
</template>

<style>
    .btn {
  
         height: 52px;
    min-width: 100px;
    border-radius: 25px;
    padding: 1rem 2rem;
    margin: 1rem 0;
    background-color: rgba(246, 81, 81, 0.868);
    color: white;
    text-align: center;
    -webkit-transition: all 0.7s ease;
    transition: all 0.7s ease;
    border: transparent;
    margin-left: 150px;
    cursor: pointer;
    
    }

.btn:hover {
  background-color: rgb(244, 118, 118);
  padding: 20px 45px;
}
</style>