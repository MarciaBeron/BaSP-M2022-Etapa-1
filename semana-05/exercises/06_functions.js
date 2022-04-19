/*Crear una función suma que reciba dos valores numéricos y retorne el 
resultado. Ejecutar la función y guardar el resultado en una variable, mostrando 
el valor de dicha variable en la consola del navegador.*/
var functionAdd = addition(2 , 5)
function addition(num1, num2) {
  return num1 + num2;
}
console.log("solution06_a:", functionAdd)
/*A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de 
los parámetros tiene error y retornar el valor NaN como resultado.*/
function addition(num1, num2) {
  if (isNaN(num1) || isNaN(num2)){
    alert ("ERROR: One of the parameters is not a number")
    return NaN
  } else{
    return num1 + num2
  }
}
console.log("solution06_b:", addition(5, "s"))
/*Crear una función validate integer que reciba un número como parámetro y 
devuelva verdadero si es un número entero.*/
function validateInteger(num){
  if (Number.isInteger(num)){
    return true
  }
}
console.log("solution06_c:", validateInteger(10))
/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error 
y retorna el número convertido a entero (redondeado).*/
function addition(num1, num2) {
  if (isNaN(num1) || isNaN(num2)){
    alert ("ERROR: One of the parameters is not a number")
    return NaN
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    alert ("Number is not integer")
    return Math.round(num1 + num2)
  } else{
    return num1 +num2
  }
}
console.log("solution06_d:", addition(2.5 , 3))
/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función 
suma probando que todo siga funcionando igual.*/
function validationF (num1, num2){
  if (isNaN(num1) || isNaN(num2)){
    alert ("ERROR: One of the parameters is not a number")
    return NaN
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    alert ("Number is not integer")
    return Math.round(num1 + num2)
  }
}
function addition(num1, num2){
  if (!isNaN(num1 && !isNaN(num2)) && (Number.isInteger(num1) && Number.isInteger(num2))){
    return num1 + num2
  } else{
    return validationF(num1, num2)
  }
}
console.log("solution06_e:", addition(5, 2.5))
