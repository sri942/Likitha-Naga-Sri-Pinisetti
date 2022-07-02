//types

let value:string|undefined|null=null;
console.log(typeof value);
value="hi";
console.log(typeof value);
value=undefined;
console.log(typeof value);

//Nullish Coalescence
function printCost(cost:number|null|undefined)
{
    console.log(`Cost:${cost??'not available'}`);
}
printCost(null);
printCost(15900);