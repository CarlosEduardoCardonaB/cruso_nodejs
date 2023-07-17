module.exports={
    buzz: buzz
}


//console.log(buzz(15));


function buzz(n){

    let x = [];
    let r = [];

        for (var i=0; i<n; i++)
        {       
            x[i] = x.push(i);      
            console.log(x[i]);
            if(x[i]%3 == 0 && x[i]%5 == 0)
            {
                r.push("FizzBuzz");
            }
            else if (x[i]%3 == 0 && x[i]%5 > 0)
            {
                r.push("Fizz");
            }
            else if (x[i]%3 > 0 && x[i]%5 == 0)
            {
                r.push("Buzz");
            }
            else {r.push(x[i]);}            
        }
        return r;
}


