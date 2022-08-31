<template>
  <!-- <ul id="myUL">
  <li><span class="caret">Kategories</span>
    <ul class="nested">
      <li>Water</li>
      <li>Coffee</li>
      <li>Water</li>
      <li>Coffee</li>
      <li>Water</li>
      <li>Coffee</li>
      <li>Water</li>
      <li>Coffee</li>
      <li>Water</li>
      <li>Coffee</li>
      <li>Water</li>
      <li>Coffee</li>
      <li><span class="caret">Tea</span>
         <ul class="nested">
          <li>Black Tea</li>
          <li>White Tea</li>
          <li><span class="caret">Green Tea</span>
            
          </li>
        </ul>
      </li> 
    </ul>
  </li>
</ul> -->
<div>
<h1>{{node.name}}</h1>
</div>
</template>
<script>
    export default{
      props:{
        node: Object,
      }
    }
</script>
<style>
 
</style>