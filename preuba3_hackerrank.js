module.exports={
    dataFinder: dataFinder
}

function dataFinder(data, wvalue) {
    // Forma larga
    // var max= 0;
    // var min = Math.max(...data);
    // var result = [];

    //forma corta
    var max= Math.max(...data);
    var min = Math.min(...data);
    var posMax;
    var posMin;
    var short_array = [];
    //forma larga
    // for (var i= 0; i<= data.length; i++){                  
    //     if(data[i] > max)
    //     {
    //         max = data[i];           
    //     }        
    //     if (min > data[i])
    //     {
    //         min = data[i];
    //     }        
    // }

    //Forma corta
    posMax = parseInt(data.indexOf(max));
    posMin = parseInt(data.indexOf(min));

    if (posMax > posMin)
    {
        short_array = data.slice(posMin, posMax);
        console.log(short_array + " entre por el Menor");
        result = find(short_array, wvalue);       
    }
    else
    {
        short_array = data.slice(posMax, posMin);
        console.log(short_array + " entre por el mayor");
        result = find(short_array, wvalue);        
    }    
    return result;    
}

function find(arrayIn, value)
{   
    var dataExist= parseInt(arrayIn.indexOf(value));
    return (dataExist >=1 ? true : false);       
}
