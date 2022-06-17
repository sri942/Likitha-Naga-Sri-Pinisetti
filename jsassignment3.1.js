const arr=["hi","hello","senorita","despacitoo","getonfloor"];
var longest=arr.reduce(function(a,b){
      return a.length>b.length?a:b;
},0);
console.log(longest);