function fits(x,y)
{
if(Number.isInteger(y/x)){
    return 'fits';
}else{
    return 'doesnot fits';
}
}
console.log(fits(10,20));
console.log(fits(10,12));


