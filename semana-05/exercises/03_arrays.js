/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por 
consola los meses 5 y 11 (utilizar console.log).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("solution03_a: Month 5 and 10:", months[4], months[10]);
/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var alphabeticMonths = months.sort()
console.log("solution03_b:", alphabeticMonths);
/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newMonthStart = months.unshift('Hello');
var newMonthEnd = months.push("Bye-bye");
console.log("solution03_c:", months);
/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var outFirstMonth = months.shift();
var outLastMonth = months.pop();
console.log("solution03_d:", months);
/*Invertir el orden del array (utilizar reverse).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var reverseMonths = months.reverse();
console.log("solution03_e:", reverseMonths);
/*Unir todos los elementos del array en un único string donde cada mes este separado 
por un guión - (utilizar join).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var joinMonths = months.join("-");
console.log("solution03_f:", joinMonths);
/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArray = months.slice(4,11)
console.log("solution03_g:", newArray);