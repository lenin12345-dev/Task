var loginEmails;
var loginPsws;
var emailId;
var psw;
var getEmail;
var getPassword;
var getEmailDash;
var fullNames;
function submitFunction() {
    
    fullNames = document.getElementById("fullName").value;
    emailId = document.getElementById("email").value;
    psw= document.getElementById("psw").value;


    window.localStorage.setItem('fullNames', fullNames);
    window.localStorage.setItem('emailIds', emailId);
    window.localStorage.setItem('psw', psw);
    
    if (fullNames !=null && emailId != null && psw !=null){
   
        window.location.href = "Login.html";
        return true;
    }else{

       return false;
    }
    
   


}

function loginFn(){
    getEmail = localStorage.getItem("emailIds");
    getPassword = localStorage.getItem("psw");

    loginEmails = document.getElementById("loginEmail").value;
    loginPsws = document.getElementById("loginPsw").value;

    if (getEmail == loginEmails && getPassword == loginPsws) {
        window.location.href = "DashBoard.html";
        return true;
    } else {
       return false;
    }
}




function dashBoardFn(){
    getFullNames = localStorage.getItem("fullNames");
    document.getElementById("fullNames").innerHTML = getFullNames;

   
}



function emailValidation() {
    var emailValid = document.getElementById("email").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValid)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}


function passValidation(){

    var pass1 = document.getElementById("psw").value;
    var pass2 = document.getElementById("pswRepeat").value;
    if(pass1==pass2){
        return true;
    }else{
        alert("Password did not match");

        return false;

    }
}


function homeLoad(){


    localStorage.clear();

}

function logoutFn() {


    getEmail="";
    getPassword="";
    if (getEmail == "" && getPassword =="" ){
        window.location.href = "Login.html";
        return true;
    }else{

        
    }

}

var cityName = "Cuttack";
var key = "8d2de98e089f1c28e1a22fc19a24ef04";

link = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&apikey=" + key;
var request = new XMLHttpRequest();
request.open('GET', link, true);

request.onload = function () {

    obj = JSON.parse(this.response);


    if (request.status >= 200 && request.status < 400) {

        temp = obj.main.temp;
        visibility = obj.visibility;
      
        document.getElementById("temperature").innerHTML = temp;
        document.getElementById("visibility").innerHTML = visibility;
    }
    else {
        console.log("The city doesn't exist! Kindly check");
    }
}
request.send();