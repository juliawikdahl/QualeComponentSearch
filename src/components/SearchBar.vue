<template>
<!-- v-for="categories in list.Category" 
    :key="categories.undercategies" -->
    <div 
    >
         <input class="searchbar" type="text" placeholder="Search.."/>
        
         
    </div>
   
 
  </template>
 <script>

  export default{
        name: 'SearchBar',
        props:{
          list: Object,
        },
        methods: {
        FindSearchWord: function() {
          
          return list 
            }
            // console.log("det funka");
        }
    }
          
      
  
  </script>

  <style>
.searchbar {
  display: flex;
  font-size: 13px;
  margin-top: 17px;
  margin-left: 150px;
  height: 52px;
    min-width: 400px;
  background-color: rgba(246, 81, 81, 0.868);
  border: transparent;
  border-radius: 25px;
  padding-left: 20px;

  
}
a {
  text-decoration: none;
  
}

::placeholder {
  color: white;
  text-decoration: none;

  
}
.searchbar:hover {
  border: transparent;
}

  </style>