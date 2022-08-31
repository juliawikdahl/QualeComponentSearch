
<template>
<div class="my-form ">
 <div class="form">
        <h1 class="h1">Sign In</h1>
            
            <div class="box-1">
                <input id="Email" class="form-control mt-3 needs-validation" required type="email" placeholder="E-postadress*"/>
                <div id="Email-error" class="invalid-feedback"> <small>Du måste ange en gilitig e-postadress</small></div>
            </div>
            <div class="box-1">
                <input id="password" class="form-control mt-3 needs-validation" required type="password" placeholder="Lösenord*"/>
                <div id="password-error" class="invalid-feedback"> <small>Du måste ange ett giltigt Lösenord</small></div>
            </div>
            
            <div style="display:none" id="selector-error" class="text-danger mb-3 ms-2"> <small>Du måste vara minst 18 år gammal.</small></div>
            
            
            <button id="btn" type="submit" class="btn-secondary mt-4 " >SKICKA</button>
    
    </div>
</div>
   
</template>

<style scoped>

.my-form {
    display: flex;
    justify-content: center;
}

.btn-secondary {
border-radius: 5px;
height: 40px;
width: 300px;

}

.form {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  box-shadow: 1px 2px 12px 4px #77515148;
 
}

.form-control {
    width: 200px;
    height: 30px;
    border-radius: 5px;
    
}

.box-1 {
    margin-bottom: 15px;
}
</style>