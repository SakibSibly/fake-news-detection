function signinn(){
    var Mail = document.getElementById('mail');
    var Pass = document.getElementById('pass');
    var mailError = document.getElementById('mail-error');
    var passError = document.getElementById('pass-error');
    var passField = document.querySelector('.password-field');
    var emailField = document.querySelector('.email-field');

    if(Mail.value == ""){
        emailField.style.borderColor = "red";
        mailError.textContent = "This is a required field.";
        return false;
    }
    else if(Pass.value  == ""){
        passField.style.borderColor = "red";
        passError.textContent = "This is a required field.";
        return false;
    }
    else{
        // alert("Login Successfully.");
        emailField.style.borderColor = "transparent";
        mailError.textContent = "";
        emailField.style.borderColor = "transparent";
        passError.textContent = "";
        return true;
    }
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