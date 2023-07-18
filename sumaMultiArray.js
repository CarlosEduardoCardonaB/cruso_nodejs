
module.exports = {
    sumArray : sumArray,
    multArraypor2: multArraypor2,
    convertArrayObj: convertArrayObj
}

//Suma los elementos de un array
function sumArray (array){
    let sum = 0;
    array.forEach(element => (sum += element));
    return (sum);
}

//multiplica los valores de un array por 2
function multArraypor2(arramulti){
    let numberx2 = arramulti.map(num => num *2)    
    return (numberx2);
    // console.log("Array por 2 = "+ numberx2);
    // console.log("Array original "+ arramulti);
}

//convierte una matriz de objetos a una matriz de array

function convertArrayObj (){
    let people = [
        {firstName:"Pepito", lastName: "Perez"},
        {firstName:"Pepita", lastName: "Guzman"},
        {firstName:"Sixtina", lastName: "Cardona"},
        {firstName:"Fulanito", lastName: "Pereira"},
        {firstName:"Pereiranito", lastName: "Cardona"}
    ]
    const solve = people.map(person => {
        let fullName = [person.firstName, person.lastName];
        return fullName;
    })

    console.log(solve);
}


