/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo 
el texto en mayúscula (utilizar toUpperCase).*/
var string10 = "Californication"
console.log("solution02_a:", string10.toUpperCase())
/*Crear una variable de tipo string con al menos 10 caracteres y generar un 
nuevo string con los primeros 5 caracteres guardando el resultado en una nueva 
variable (utilizar substring).*/
var stringAtLeast10 = "Comfortably"
var first5 = stringAtLeast10.substring(0,5)
console.log("solution02_b:", first5)
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con los últimos 3 caracteres guardando el resultado en una nueva variable 
(utilizar substring).*/
var atLeast10 = "locomotive"
var last3 = atLeast10.substring(7)
console.log("solution02_c:", last3)
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con la primera letra en mayúscula y las demás en minúscula. Guardar el 
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y 
el operador +).*/
var minimum10 = "abcdefghijkl"
var Minimum10 = (minimum10.substring(0,1).toUpperCase()) + (minimum10.substring(1).toLowerCase())
console.log("solution02_d:", Minimum10)
/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio 
en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una 
variable (utilizar indexOf).*/
var blankSpace = "alea jacta est"
var firstBlankSpace = blankSpace.indexOf(" ")
console.log("solution02_e:" , firstBlankSpace)
/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres 
y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
para generar un nuevo string que tenga la primera letra de ambas palabras en 
mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).*/
var twoWords = "bohemian rhapsody" 
var firstPosition = twoWords.indexOf("b")
var firstLbohemian = twoWords.substring(firstPosition , 1)
var secondPosition = twoWords.indexOf("r")
var firstLrhapsody = twoWords.substring(secondPosition , 10)
var restOfbohemian = twoWords.substring(1,9)
var restOfrhapsody = twoWords.substring(10,17)
var blankSpc = twoWords.indexOf(" ")
newString = firstLbohemian.toUpperCase() + restOfbohemian.toLowerCase() + firstLrhapsody.toUpperCase() + restOfrhapsody.toLowerCase()
console.log("solution02_f:", newString)