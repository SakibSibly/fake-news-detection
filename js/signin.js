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