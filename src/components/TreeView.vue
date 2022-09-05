<template>
  <div id="Tree">
<div >
  <h2 class="root" v-if="depth == 0">Categories</h2>
</div>
<div
@click="expanded = !expanded"
:style="{'margin-left': `${depth < 2 ? `0` : `15`}px`}"
class="node">

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
  #Tree{
    color: wheat;
   background-color: rgba(15, 15, 15, 0.867);
   margin-right: 1550px;
   margin-top: -20px;
   margin-bottom: 40px;
   white-space: nowrap;

  }
 .node{
 
  margin-left:depth * 20px;
 }
 .root{
  margin-bottom: 30px;
  margin-left: 50px;
 }
 .tree{

  margin-left: 50px;
 }
</style>