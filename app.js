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

//Este comando nos sirve para recibir argumentos de la terminal como cuando damos la directriz de "node app.js 6 7"
//El nos retorna los valores de cada argumento como si fuera un array donde la palabra "node" sería la posición [0] del arreglo y asi sucecivamente 
//para acceder a los valores del arreglo lo podemos hacer asi: "console.log(process.argv[3])" y si lo ingresamos en un ciclo for hata el .lenght
//podemos correr el comando asi: "node app.js 1 2 3 4 5 6 7" y nos va a mostrar una lista hacia abajo de estos números
//1
//2
//3...
//console.log(process.argv)


//Para ver los datos sobre la memoria usada
//console.log(process.memoryUsage())


//sumar los elementos de un array en el archivo sumaMultiarray.js
//console.log(sumArray (array));

//Multiplicar los elementos de un array X 2 en sumaMultiArray.js
var arrayx2 = multArraypor2(array);
//console.log("array x 2 = " + arrayx2 + " array original= " + array);

//Convertir matriz de objetos a array de valores en el archivo sumaMultiArray.js
//convertArrayObj();

//Mostramos el sistema operativo del pc donde se ejecuta node
// const os = require('os');
// console.log(os.type());
// //Mostramos ruta del directorio raiz
// console.log(os.homedir());
// //mostramos los segundos transcurridos desde que se instaló el SO
// console.log(os.uptime());
// // mostramos info sobre el usuario
// console.log(os.userInfo());


//Timmer o temporizadores. 
//Dentro de el paréntisis el primer argumento es el nombre de la función a ejecutar, el segundo son los milisegundos que se demora en ejecutar
//y el tercero o cuarto son los argumentos de la función. Nota: solo llama funciones en el mismo codigo. No imports
//setTimeout(saludos, 2000, "Mundo");

//Esta se ejectua después del código síncrono. El primer argumento es función y las siguientes parámetros de la función
// console.log("Esta linea está antes del setinmediate");
// setImmediate(saludos, "world");
// console.log("Esta linea está después del setinmediate");


//Este se ejecuta de manera indefinida cada intervalo que definamos en el segundo argumento 
setInterval(saludos, 3000, "every body")

function saludos(saludo){
    console.log(`hola, ${saludo}`);
}