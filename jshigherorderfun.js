function calculate(operation,initialvalue,numbers){
    let total=initialvalue;
    for(const number of numbers){
        total=operation(total,number);
    }return total;
    } 
    function sum(n1,n2){
        return n1+n2;
    }
    function multiply(n1,n2){
        return n1*n2;
    }
    console.log(calculate(sum,0,[3,4,1]));
   console.log(calculate(multiply,1,[3,4,1]));
    
