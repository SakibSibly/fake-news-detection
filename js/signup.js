document.addEventListener("DOMContentLoaded", function() {
    var myInput = document.getElementById("pass");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    myInput.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }

    myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
    }

    myInput.onkeyup = function() {
        var lowerCaseLetters = /[a-z]/g;
        if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } 
        else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } 
        else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } 
        else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } 
        else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }
});

function signupp() {
    var Name = document.getElementById('name').value;
    var User = document.getElementById('userName').value;
    var Email = document.getElementById('email').value;
    var Date = document.getElementById('date').value;
    var Pass = document.getElementById('pass').value;

    if (Name == ""){
        alert("Please Enter your Name first!");
        return false;
    }
    else if(User == ""){
        alert("Please Enter User Name first!");
        return false;
    }
    else if(Email == ""){
        alert("Please Enter your Email Address!");
        return false;
    }
    else if(Date == ""){
        alert("Your Date of Birth!");
        return false;
    }
    else if(Pass == ""){
        alert("Provide a Password Please!");
        return false;
    }

    else {
        // alert('Successfully Signed up.');
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