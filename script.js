 let name = document.getElementById("name");
 let email =document.getElementById("email");
 let password = document.getElementById("password");
 let button = document.getElementById("submitBtn");

 name.addEventListener("keyup", checkForm);
 email.addEventListener("keyup", checkForm);
 password.addEventListener("keyup", checkForm);

function checkForm(){

    let valid = true;

    //Name
    if ( name.value ==""){
        document.getElementById("nameError").innerHTML = "Name is required";
        valid: false;

    }
    else{
        document.getElementById("nameError").innerHTML = "";
    }

// Email

    if( email.value.includes("@") && email.value.includes(".")){
        document.getElementById("emailError").innerHTML ="";
    }
    else{
        document.getElementById("emailError").innerHTML =" Enter valid email";
        valid: false;
    }

// Password

   if (password.value.length >= 6){
         document.getElementById("passwordError").innerHTML = "";
   }
   else {
    document.getElementById("passwordError").innerHTML = " Minimum 6 characters";
    valid:false;
   }
 
   // Enable Button

   if(valid){
        button.disabled = false;
   }
   else{
    buttom.disabled = true;
   }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration Successful!");

    function clearForm() {
    document.querySelector("form").reset();
}
});












