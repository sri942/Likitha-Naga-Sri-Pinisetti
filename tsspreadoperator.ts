let arr1=[3,8,9,5];
let arr2=[4,7,6,1];
//creating new array from existing array
let copyArray=[...arr1];
console.log("copied array is"+copyArray);
//creating new array from existing array with more elements
let newArray=[...arr2,3,9,0];
console.log("new array is"+newArray);
//creating array by merging two arrays
let mergedArray=[...arr1,...arr2];
console.log("merged array is"+mergedArray);