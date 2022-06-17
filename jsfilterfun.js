//pro 1
const numbers=[1,2,3,4];
const evens=numbers.filter(item=>item%2===0);
console.log(evens);
//pro2
const ages=[32,45,23,19];
const result=ages.filter(checkAdult);
function checkAdult(age){
    return age>=20;
}
console.log(result);