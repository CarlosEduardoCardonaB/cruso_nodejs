const {saludo, saludarHolaMundo} = require("./saludo.js"); //De esta manera importamos otro modulo javascript. 
const { buzz } = require("./pruebas1_buzz_hackerrank.js");
//Importación de una clase
const classAcount = require("./prueba2_class_hackerrank.js");
var newInstance = new classAcount();
const { dataFinder } = require("./preuba3_hackerrank.js");
const { sumArray, multArraypor2, convertArrayObj} = require("./sumaMultiArray.js");

//console.log(saludo);
// console.log(saludo.saludar("Desde app js"));
// console.log(saludo.saludarHolaMundo());

//probando prueba hackerrank 1 buzz
//console.log(buzz(15));

//prueba de calses de hackerrank
// newInstance.initialBalance=1000;
// newInstance.credit(150);
// console.log(newInstance.debit(1100));


var array = [15, 2, 4, 20, 46, 56, 3, 8, 45, 11];
// Problema de hackerrank donde se envian 3 valores a una matriz y me devuelve true o false si el valor es encontrado recortando la matriz
// console.log(dataFinder(array, 4));


//console.log(process.argv)
//Este comando nos sirve para recibir argumentos de la terminal como cuando damos la directriz de "node app.js 6 7"
//El nos retorna los valores de cada argumento como si fuera un array donde la palabra "node" sería la posición [0] del arreglo y asi sucecivamente 
//para acceder a los valores del arreglo lo podemos hacer asi: "console.log(process.argv[3])"

//console.log(process.memoryUsage())
//Para ver los datos sobre la memoria usada

//sumar los elementos de un array en el archivo sumaMultiarray.js
console.log(sumArray (array));

//Multiplicar los elementos de un array X 2 en sumaMultiArray.js
var arrayx2 = multArraypor2(array);
console.log("array x 2 = " + arrayx2 + " array original= " + array);

//Convertir matriz de objetos a array de valores en el archivo sumaMultiArray.js
//convertArrayObj();