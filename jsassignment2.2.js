array=[{radius:5},{radius:9},{radius:2}];
array.sort(function comparator(a,b){
    if(a.radius<b.radius) return-1;
    if(a.radius>b.radius) return 1;
    return 0;
});
console.log(array);