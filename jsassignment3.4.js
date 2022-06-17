function isEven(value){
    return value%2!==0;
}
var filtered=[12,13,15,16,7,9].filter(isEven);
console.log(filtered);