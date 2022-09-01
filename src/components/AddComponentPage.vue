<template>
  <div class="add-form">
 <div class="add-component">
        <h1 class="h1">Add Component</h1>


             <div class="form-1">
                <input id="Category" class="form-control" required type="name" placeholder="Category*"/>
                <div id="description-error" class="invalid-feedback"> <small>Du måste ange en giltig kategori</small></div>
            </div>
            <div class="form-1">
                <input id="Sub-Category" class="form-control" required type="name" placeholder="Sub-Category*"/>
                <div id="description-error" class="invalid-feedback"> <small>Du måste ange en giltig under-kategori</small></div>
            </div>

            <div class="form-1">
                <input id="component" class="form-control" required type="name" placeholder="Title*"/>
                <div id="component-error" class="invalid-feedback"> <small>Du måste ange en giltig titel</small></div>
            </div>

            
            <div class="form-1">
                <input id="Code" class="form-control" required type="name" placeholder="Code*"/>
                <div id="Code-error" class="invalid-feedback"> <small>Du måste ange en giltig kodsnutt</small></div>
            </div>

            <div class="form-1">
                <input id="description" class="form-control" required type="textarea" placeholder="Description*"/>
                <div id="description-error" class="invalid-feedback"> <small>Du måste ange en giltig beskrivning</small></div>
            </div>
           
        
    
            <button id="btn" type="submit" class="btn-secondary mt-4 " >SKICKA</button>
    
    </div>
</div>
</template>

<style scoped>
.add-form {
    display: flex;
    justify-content: center;
}

.btn-secondary {
border-radius: 5px;
height: 40px;
width: 300px;

}

.add-component {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  box-shadow: 1px 2px 12px 4px #77515148;
 
}

.form-control {
    width: 290px;
    border-radius: 5px;
     height: 40px;
}


.form-1 {
    margin-bottom: 15px;
  
}



</style>