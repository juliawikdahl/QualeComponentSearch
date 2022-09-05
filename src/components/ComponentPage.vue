<script>
  import Modal from "vue-bs-modal";

 
// export default {
//   name: 'Modal',
//   methods: {
//     close() {
//       this.$emit('edit-modal')
//     }
//   }
// }

export default {

  data() {
    return {
      showModal:true
    }
  }
}

</script>


<template>
    <div class="code container">
       <div>
        <div>
          
          <button class="button">länk</button>
          
             <button @click="showModal =true" class="button2">Redigera</button>
          
          <transition-group name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
          </transition-group>

          <transition-group name="slide" appear>
            <div class="modal" v-if="showModal"> 
              <input class="form3" type="text" placeholder=""/>
              <input class="form2" type="text" placeholder="Search.."/>
              <input class="form2" type="text" placeholder="Search.."/>
              <input class="form2" type="text" placeholder="Search.."/>
              <input class="form2" type="text" placeholder="Search.."/>
              <button class="form2" @click="showModal =false" >Edit</button>
            </div>


          </transition-group>

         


         </div>
         
         <div>
            <h1 class="title">Category</h1>
         </div>
         <div class="beskrivning"> 
           <p>Besläktade ord: beskriva, beskrivande Jämför: berättelse, framställning, karaktärisering, signalement, skildring, teckning</p>
         </div>
        
         <div class="kodsnutt"> 
           <p>Kartläggning, utveckling och förbättring av IT-lösningar – såväl på en aggregerad enterprise-nivå som med fokus på specifika applikationer.Kartläggning, utveckling och förbättring av IT-lösningar – såväl på en aggregerad enterprise-nivå som med fokus på specifika applikationer.Kartläggning, utveckling och förbättring av IT-lösningar – såväl på en aggregerad enterprise-nivå som med fokus på specifika applikationer.</p>
         </div>
       
       </div>
    </div>
    
   
   
</template>

<style>
   .code {
    
    
    display: flex;
    justify-content: center;
    
   }

   .title {
    text-align: center;
   }

   .button {
    margin-left: 520px;
    margin-bottom: 5px;
    margin-right: 13px;
    cursor: pointer;
   }
   
   .button2 {
    cursor: pointer;
    
   }

   .beskrivning {
    width: 600px;
    padding: 10px;
   }
   .kodsnutt {
    background-color: rgba(216, 214, 214, 0.897);
    width: 600px;
    padding: 20px;
   }

   .code {
    position: relative;
   }

   .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.7);

   }
   /* .fade-enter-active,
   .fade-leave-active {
    transition: opacity 0.2s;
   }

   .fade-enter,
   .fade-leave-to {
    opacity: 0;
   }
   .slide-enter-active,
   .slide-leave-active {
    transition: opacity 0.2s;
   }

   .slide-enter,
   .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
   } */

   .modal {
    position: fixed;
    margin-top: 250px;
    left: 80%;
    transform: translate(-100%, -100%);
    z-index: 99;
    max-width: 1000px;
    height: 500px;
    display: table;

    background-color: rgb(227, 235, 232);


   }
   .form3 {
    margin-top: 30px;
    margin-bottom: 8px;
    width: 300px;
    margin-left: 200px;
    margin-right: 200px;
    height: 30px;
   }
   .form2 {

    margin-bottom: 8px;
    width: 300px;
    margin-left: 200px;
    margin-right: 200px;
    height: 30px;

   }
   .container-is-blurred {
      filter: blur(3px);
   }
   .modal-is-active {
     display: block;
    cursor: pointer ;
   }

</style>