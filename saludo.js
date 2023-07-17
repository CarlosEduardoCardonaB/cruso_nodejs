//Para exportar un solo método
// module.exports.saludar = saludar; 
// module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
    saludar:saludar,
    saludarHolaMundo:saludarHolaMundo
}

function saludar(nombre) {
    return `hola, ${nombre}`; 
}

function saludarHolaMundo(){

    return ('Hola mundo desde saludo.js');
}

//console.log(module.exports);

// console.log(saludar("Perros"));