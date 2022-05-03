function emailValidation(input) {
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(input);
}

function validation(param) {
  var arrayLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","x","y","z"];
  var letters = 0;
  var numbers = 0;
  for (let i = 0; i < param.length; i++) {
    if (arrayLetters.includes(param[i].toLocaleLowerCase())) {
      letters++;
    } else {
      Number.isInteger(param)
      numbers++;
    }
  }
  if (param.length < 8 || letters <= 0 || numbers <= 0) {
    return false
  } else {
    return true
  }
}

var emailError = ""
var passwordError = ""
var loginURL = "https://basp-m2022-api-rest-server.herokuapp.com/login";
//var userName = "name:" + emailInput.value;
//var userName = userName.concat
//var userNameURL = new URLSearchParams({
//  name: emailInput.value,
//})

window.onload = function() {

  var emailInput = document.getElementById("e-mail");
  var errorUsername = document.getElementById("wrong-user");
  function usernameMessage() {
    if (emailValidation(emailInput.value) == false) {
      errorUsername.style.visibility="visible";
      emailError = errorUsername.textContent;
    } else {
      emailError = emailInput.value;
    }
  }
  emailInput.addEventListener("blur", usernameMessage);
  emailInput.addEventListener("focus", function() {
    errorUsername.style.visibility="hidden";
  })

  var errorPassword = document.getElementById("wrong-password");
  var passwordInput = document.getElementById("password");
  function passwordMessage() {
    if (validation(passwordInput.value) == false) {
      errorPassword.style.visibility="visible";
      passwordError = errorPassword.textContent;
    } else {
      passwordError = passwordInput.value;
    }
  }
  passwordInput.addEventListener("blur", passwordMessage);
  passwordInput.addEventListener("focus", function() {
    errorPassword.style.visibility="hidden";
  })

  function allValid() {
    if (emailValidation(emailInput.value) && validation(passwordInput.value)) {
      return true;
    }
  }
  
  var loginURL = "https://basp-m2022-api-rest-server.herokuapp.com/login";
  function submitFetch() {
    if (allValid()) {
      fetch(loginURL + "?email=" + emailInput.value + "&password=" + passwordInput.value)
      .then(function (response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        alert (data.msg + "\n" + "Email: " + emailError + "\n" + "Password: " + passwordError)
      })
      .catch(function(error) {
        alert("Login failed", error)
      })
    }
  }  
  function showSubmit(event) {
    event.preventDefault();
    submitFetch();
    alert ("Email: " + emailError + "\nPassword: " + passwordError)
  }
  var buttonLogin = document.querySelector('input[type="submit"]');
  buttonLogin.addEventListener("click", showSubmit);

  var buttonForgotPassword = document.querySelector('button[class="frgt-passwrd"]');
  buttonForgotPassword.addEventListener("click", clickForgot);
  function clickForgot() {
    if (emailValidation(emailInput.value)==false){
      alert ("Please enter valid e-mail");
    } else {
      alert ("New password sent to your e-mail, please confirm" + "\n" + emailInput.value)
    }
  } 
}