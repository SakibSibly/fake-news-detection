function signinn(){
    var Mail = document.getElementById('mail');
    var Pass = document.getElementById('pass');
    var mailError = document.getElementById('mail-error');
    var passError = document.getElementById('pass-error');
    var passField = document.querySelector('.password-field');
    var emailField = document.querySelector('.email-field');
    var flag = true;

    Mail.addEventListener('input', function() {
        if(Mail.value != ""){
            emailField.style.borderColor = "transparent";
            mailError.textContent = "";
        }
    });

    Pass.addEventListener('input', function() {
        if(Pass.value != ""){
            passField.style.borderColor = "transparent";
            passError.textContent = "";
        }
    });
    


    if(Mail.value == ""){
        emailField.style.borderColor = "red";
        mailError.textContent = "This is a required field.";
        flag = false;
    }
    
    if(Pass.value  == ""){
        passField.style.borderColor = "red";
        passError.textContent = "This is a required field.";
        flag = false;
    }

    if(flag){
        passField.style.borderColor = "transparent";
        passError.textContent = "";
        emailField.style.borderColor = "transparent";
        mailError.textContent = "";
    }


    return flag;

    // else{
    //     // alert("Login Successfully.");
    //     passField.style.borderColor = "transparent";
    //     passError.textContent = "";
    //     return true;
    // }
}


// Eye Btn
function pass() {
    var passInput = document.getElementById('pass');
    var passIcon = document.getElementById('pass-icon');

    if (passInput.type === "password") {
        passInput.type = "text";
        passIcon.className = "fa-solid fa-eye";
    } else {
        passInput.type = "password";
        passIcon.className = "fa-solid fa-eye-slash";
    }
}