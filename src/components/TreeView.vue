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
<!--  -->
<div>
  <h2 class="root" v-if="depth == 0">Categories</h2>
<div 
@click="expanded = !expanded"
:style="{'margin-left': `${depth < 2 ? `0` : `15`}px`}px` }"
class="node"
>


<p v-if="depth > 0" class="tree" :style="{'font-size': `${BoldTitle ? '20px' : '16px'}`, 'font-weight': `${depth < 2 ? '900' : '300'}`}">{{node.name}}</p>
</div>
<TreeView 
v-if="expanded"
v-for="child in node.children" 
:key="child.name" 
:node ="child"
:depth="depth + 1"
/>
</div>
</template>

<script>
    export default{
      name: 'TreeView',
      props:{
        shouldBeExpanded: Boolean,
        node: Object,
        BoldTitle: Boolean,
        depth:{
          type: Number,
          default:0,
        }
      },
      data(){
        return{
          expanded: this.shouldBeExpanded,
        }
      },
      mounted() {
        console.log(this.node);
      }
    }
</script>
<style scoped>
 .node{
  margin-left:depth * 20px;
 }
 .root{
 
  margin-left: 10px;
 }
 .tree{
  margin-left: 10px;
 }
</style>