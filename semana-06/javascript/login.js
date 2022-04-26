function emailValidation(input){
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(input);
}

function validation(param) {
  var arrayLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","x","y","z"];
  var letters = 0;
  var numbers = 0;
  for (let i = 0; i < param.length; i++) {
    if (arrayLetters.includes(param[i].toLocaleLowerCase())){
      letters++;
    }else{
      Number.isInteger(param)
      numbers++;
    }
  }
  if (param.length < 1 || letters <= 0 || numbers <= 0) {
    return false
  }else{
    return true
  }
}

var emailError = ""
var passwordError = ""

window.onload = function(){

  var usernameInput = document.getElementById("e-mail");
  var errorUsername = document.getElementById("wrong-user");
  usernameInput.addEventListener("blur", usernameMessage);
  function usernameMessage(){
    if (emailValidation(usernameInput.value) == false) {
      errorUsername.style.visibility="visible";
      emailError = errorUsername.textContent;
    } else {
      emailError = usernameInput.value;
    }
  }
  usernameInput.addEventListener("focus", function() {
    errorUsername.style.visibility="hidden";
  })

  var errorPassword = document.getElementById("wrong-password");
  var passwordCall = document.getElementById("password");
  passwordCall.addEventListener("blur", passwordMessage);
  function passwordMessage(){
    if (validation(passwordCall.value) == false) {
      errorPassword.style.visibility="visible";
      passwordError = errorPassword.textContent;
    } else {
      passwordError = passwordCall.value;
    }
  }
  passwordCall.addEventListener("focus", function() {
    errorPassword.style.visibility="hidden";
  })
  
  var buttonLogin = document.querySelector('input[type="submit"]');
  buttonLogin.addEventListener("click", clickLogin);
  function clickLogin(){
    alert("Email: " + emailError + "\nPassword: " + passwordError)
  }

  var buttonForgotPassword = document.querySelector('button[class="frgt-passwrd"]');
  buttonForgotPassword.addEventListener("click", clickForgot);
  function clickForgot(){
    if (emailValidation(usernameInput.value)==false){
      alert("Please enter valid e-mail");
    } else {
      alert ("New password sent to your e-mail, please confirm" + "\n" + usernameInput.value)
    }
  } 
}