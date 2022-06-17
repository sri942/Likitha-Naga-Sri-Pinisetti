function sum_of_squares(array){
    var sum=0;
    i=array.length;
    while(i--)
    sum +=Math.pow(array[i],2);
    return sum;
}
console.log(sum_of_squares([2,4,3,5]));