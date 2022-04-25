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

window.onload = function(){
  var usernameInput = document.getElementById("e-mail");
  var errorUser = document.getElementsByClassName("message-error");
  var errorUsername = errorUser[0];
  usernameInput.addEventListener("blur", function(){
    if (emailValidation(usernameInput.value) == false){
      errorUsername.style.visibility="visible";
    }
  });
  usernameInput.addEventListener("focus", function(){
    errorUsername.style.visibility="hidden";
  })
  var errorPassword = errorUser[1];
  var passwordCall = document.getElementById("password");
  passwordCall.addEventListener("blur", function(){
    if (validation(passwordCall.value) == false){
      errorPassword.style.visibility="visible";
    }
  })
  passwordCall.addEventListener("focus", function(){
    errorPassword.style.visibility="hidden";
  })
  var buttonLogin = document.querySelector('input[type="submit"]');
  buttonLogin.addEventListener('click', clickLogin)
  function clickLogin(e){
    if(emailValidation(usernameInput.value) && validation(passwordCall.value) == true){
      alert("User:" + " " + usernameInput.value + " " + "Password:" + passwordCall.value)
    }else{
      alert("Wrong user and/or Password")
    }
  }
}