<template>
  <ul id="myUL">
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
</ul>

</template>
<script>
    export default{
        name:'TreeView',
    }
</script>
<style>
 
</style>