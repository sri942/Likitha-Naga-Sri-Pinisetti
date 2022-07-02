function getArray(items:any[]):any[]{
    return new Array().concat(items);
}
let myNumArr=getArray([100,200,300]);
let myStrArr=getArray(["hello","world"]);
myNumArr.push(500);
myStrArr.push("hello everyone");
myNumArr.push("hi");
myStrArr.push(false);
console.log(myNumArr);
console.log(myStrArr);