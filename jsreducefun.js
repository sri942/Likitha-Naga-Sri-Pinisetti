
//pro 1
const numbers=[1,4,6,2];
const sum=numbers.reduce(function(result,item){return result+item;},0);
console.log(sum);
//pro 2
var pets=['dog','cat','lion','chick','bear'];
var petCounts=pets.reduce(function(obj,pet)
{ if(!obj[pet]){
    obj[pet]=1;}
  else{
    obj[pet]++;
  }
  return obj;
},{});
console.log(petCounts);