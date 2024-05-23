function signinn(){
    var Mail = document.getElementById('mail').value;
    var Pass = document.getElementById('pass').value;
    if(Mail == ""){
        alert('Please provide your mail first!');
        return false;
    }
    else if(Pass == ""){
        alert('Provide your Correct Password!');
        return false;
    }
    else{
        // alert("Login Successfully.");
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