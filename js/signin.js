function signinn(){
    var Mail = document.getElementById('mail');
    var Pass = document.getElementById('pass');
    var mailError = document.getElementById('mail-error');
    var passError = document.getElementById('pass-error');

    if(Mail.value == ""){
        Mail.style.borderColor = "red";
        mailError.textContent = "This is a required field.";
        return false;
    }
    else if(Pass.value  == ""){
        Pass.style.borderColor = "red";
        passError.textContent = "This is a required field.";
        return false;
    }
    else{
        // alert("Login Successfully.");
        Mail.style.borderColor = "";
        mailError.textContent = "";
        Pass.style.borderColor = "";
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