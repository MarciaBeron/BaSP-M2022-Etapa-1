function validateLetters(param) {
  var noNumbers = false;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(element)) {
      noNumbers = true;
    }
  }
  return noNumbers;
}
function validateNumbers(param) {
  var noLetters = false;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (!isNaN(element)) {
      noLetters = true;
    }
  }
  return noLetters;
}
function validateName(param) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
  }
  if (validateNumbers(param) == true || param.length < 3) {
    return false;
  } else {
    return true;
  }
}
function validateDocument(param) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
  }
  if (validateLetters(param) == true || param.length < 7) {
    return false;
  } else {
    return true;
  }
}

// function createDateMMddYYY(nDate){
//   var day = new Date().getDate();
//   var month = new Date().getMonth();
//   var year = new Date().getFullYear();
//   return month + "/" + day + "/" + year;
// }
// console.log(createDateMMddYYY());
// function dobMMddYYY(inputDate){
//     var day = new Date(inputDate).getDate();
//   var month = new Date(inputDate).getMonth();
//   var year = new Date(inputDate).getFullYear();
//   return month + "/" + day + "/" + year;
// }

function validateDate(inputD) {
  var today = new Date();
  var inputDate = new Date(inputD);
  if (inputDate > today) {
    return false;
  }
}
function validatePhone(phoneN) {
  for (let i = 0; i < phoneN.length; i++) {
    const element = phoneN[i];
  }
  if (validateLetters(phoneN) == true || phoneN.length < 10) {
    return false;
  } else {
    return true;
  }
}
function validateAddress(param) {
  var numbers = "";
  var letters = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(param)) {
      letters++;
    } else if (!isNaN(param)) {
      numbers++
    }
  }
  if (numbers <= -1 || letters <= -1 || letters + numbers < 5 || param.indexOf(" ") <= 0 ) {
    return false;
  } else {
    return true;
  }
}
function validateCity(param) {
  var numbers = "";
  var letters = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(param)) {
      letters++;
    } else if (!isNaN(param)) {
      numbers++
    }
  }
  if (letters < 3) {
    return false;
  } else {
    return true;
  }
}
function validatePostalCode(param) {
  var numbers = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (!isNaN(param)) {
      numbers++;
    }
  }
  if (isNaN(param) || numbers < 4 || numbers > 5) {
    return false;
  } else {
    return true;
  }
}
function emailValidation(input) {
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(input);
}
function validatePassword(param) {
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

var nameError = "";
var surnameError = "";
var documentError = "";
var dateError = "";
var numberError = "";
var addressError = "";
var cityError = "";
var postalError = "";
var mailError = "";
var passwordError = "";
var rptPasswordError = "";

window.onload = function() {

  var nameInput = document.getElementById("name-sup");
  var errorName = document.getElementById("invalid-name");
  nameInput.addEventListener("blur", function() {
    if (validateName(nameInput.value) == false) {
      errorName.style.visibility="visible";
      nameError = errorName.textContent;
    } else {
      nameError = nameInput.value;
    }
  })
  nameInput.addEventListener("focus", function() {
    errorName.style.visibility="hidden";
  })

  var surnameInput = document.getElementById("surname");
  var errorSurname = document.getElementById("invalid-surname");
  surnameInput.addEventListener("blur", function() {
    if (validateName(surnameInput.value) == false) {
      errorSurname.style.visibility="visible";
      surnameError = errorSurname.textContent;
    } else {
      surnameError = surnameInput.value;
    }
  })
  surnameInput.addEventListener("focus", function() {
    errorSurname.style.visibility="hidden";
  })

  var documentInput = document.getElementById("document");
  var errorDoc = document.getElementById("wrong-document");
  documentInput.addEventListener("blur", function() {
    if (validateDocument(documentInput.value) == false) {
      errorDoc.style.visibility="visible";
      documentError = errorDoc.textContent;
    } else {
      documentError = documentInput.value;
    }
  })
  documentInput.addEventListener("focus", function() {
    errorDoc.style.visibility="hidden";
  })

  var dateInput = document.getElementById("birthdate");
  var errorDate = document.getElementById("date-before-today");
  dateInput.addEventListener("blur", function() {
    if (validateDate(dateInput.value) == false) {
      errorDate.style.visibility="visible";
      dateError = errorDate.textContent;
    } else {
      dateError = dateInput.value;
    }
  })
  dateInput.addEventListener("focus", function() {
    errorDate.style.visibility="hidden";
  })

  var phoneInput = document.getElementById("phone");
  var errorPhone = document.getElementById("invalid-number");
  phoneInput.addEventListener("blur", function() {
    if (validatePhone(phoneInput.value) == false) {
      errorPhone.style.visibility="visible";
      numberError = errorPhone.textContent;
    } else {
      numberError = phoneInput.value;
    }
  })
  phoneInput.addEventListener("focus", function() {
    errorPhone.style.visibility="hidden";
  })

  var addressInput = document.getElementById("address");
  var errorAddress = document.getElementById("invalid-address");
  addressInput.addEventListener("blur", function() {
    if (validateAddress(addressInput.value) == false) {
      errorAddress.style.visibility="visible";
      addressError = errorAddress.textContent;
    } else {
      addressError = addressInput.value;
    }
  })
  addressInput.addEventListener("focus", function() {
    errorAddress.style.visibility="hidden";
  })

  var cityInput = document.getElementById("city");
  var errorCity = document.getElementById("invalid-city");
  cityInput.addEventListener("blur", function() {
    if (validateCity(cityInput.value) == false) {
      errorCity.style.visibility="visible";
      cityError = errorCity.textContent;
    } else {
      cityError = cityInput.value;
    }
  })
  cityInput.addEventListener("focus", function() {
    errorCity.style.visibility="hidden";
  })

  var postalCodeInput = document.getElementById("postal-code");
  var errorPostal = document.getElementById("invalid-postal");
  postalCodeInput.addEventListener("blur", function(){
    if (validatePostalCode(postalCodeInput.value) == false) {
      errorPostal.style.visibility="visible";
      postalError = errorPostal.textContent;
    } else {
      postalError = postalCodeInput.value;
    }
  })
  postalCodeInput.addEventListener("focus", function() {
    errorPostal.style.visibility="hidden";
  })

  var emailInput = document.getElementById("e-mail");
  var errorEmail = document.getElementById("invalid-mail");
  emailInput.addEventListener("blur", function() {
    if (emailValidation(emailInput.value) == false) {
      errorEmail.style.visibility="visible";
      mailError = errorEmail.textContent;
    } else {
      mailError = emailInput.value;
    }
  })
  emailInput.addEventListener("focus", function() {
    errorEmail.style.visibility="hidden";
  })

  var passwordInput = document.getElementById("password");
  var errorPassword = document.getElementById("invalid-password");
  passwordInput.addEventListener("blur", function() {
    if (validatePassword(passwordInput.value) == false) {
      errorPassword.style.visibility="visible";
      passwordError = errorPassword.textContent;
    } else {
      passwordError = passwordInput.value;
    }
  })
  passwordInput.addEventListener("focus", function() {
    errorPassword.style.visibility="hidden";
  })

  var repeatPasswordInput = document.getElementById("rpt-password");
  var errorRepeatPassword = document.getElementById("invalid-rptpassword");
  repeatPasswordInput.addEventListener("blur", function() {
    if (validatePassword(repeatPasswordInput.value) == false) {
      errorRepeatPassword.style.visibility="visible";
      rptPasswordError = errorRepeatPassword.textContent;
    } else {
      rptPasswordError = repeatPasswordInput.value;
    }
  })
  repeatPasswordInput.addEventListener("focus", function() {
      errorRepeatPassword.style.visibility="hidden";
  })
  
  function allValidationsOk () {
    if (validateName && validateDocument && validateDate && validatePhone && validateAddress &&
    validateCity && validatePostalCode && emailValidation && validatePassword){
      return true;
    } else {
      alert("Something went wrong, check your info")
    }
  }

  var signupURL = "https://basp-m2022-api-rest-server.herokuapp.com/signup"
  
  function confirmFetch() {
    if (allValidationsOk()) {
      fetch(signupURL + "?name=" + nameError + "&lastName=" + surnameError + "&dni=" + 
      documentError + "&dob=" + dateError + "&phone=" + numberError + "&address=" + 
      addressError + "&city=" + cityError + "&zip=" + postalError + "&email=" + 
      mailError + "&password=" + passwordError + "&repeatPassword=" + rptPasswordError)
      .then(function (response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        alert (data.msg + "\n" + "Name: " + nameError + "\nSurname: " + surnameError + "\nDocument: " + 
        documentError + "\nDate of Birth: " + dateError + "\nPhone number: " + 
        numberError + "\nAddress: " + addressError + "\nLocation: " + cityError + 
        "\nPostal code: " + postalError + "\nE-mail: " + mailError + "\nPassword: " + 
        passwordError + "\nRepeat password: " + rptPasswordError);
      })
      .catch(function(error) {
        alert("Sign-up failed", error)
      })
    }
  }
  
  function showConfirm(event) {
    event.preventDefault();
    confirmFetch();
    alert("Name: " + nameError + "\nSurname: " + surnameError + "\nDocument: " + 
    documentError + "\nDate of Birth: " + dateError + "\nPhone number: " + 
    numberError + "\nAddress: " + addressError + "\nLocation: " + cityError + 
    "\nPostal code: " + postalError + "\nE-mail: " + mailError + "\nPassword: " + 
    passwordError + "\nRepeat password: " + rptPasswordError);
  }
  var buttonConfirm = document.querySelector('input[type="submit"]');
  buttonConfirm.addEventListener('click', showConfirm);
}