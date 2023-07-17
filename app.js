const {saludo, saludarHolaMundo} = require("./saludo.js"); //De esta manera importamos otro modulo javascript. 
const { buzz } = require("./pruebas1_buzz_hackerrank.js");
//Importación de una clase
const classAcount = require("./prueba2_class_hackerrank.js");
var newInstance = new classAcount();
const { dataFinder } = require("./preuba3_hackerrank.js");

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
console.log(dataFinder(array, 4));
