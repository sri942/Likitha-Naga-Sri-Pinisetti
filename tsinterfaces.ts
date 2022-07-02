//creayion of interface
interface Circle{
    radius:number,
    diameter:number
};
const circle:Circle={
    radius:10,
    diameter:20
};
console.log(circle);


//extending interface
interface ColoredCircle extends Circle{
    color:string
}
const coloredCircle:ColoredCircle={
    radius:15,
    diameter:30,
    color:"red"
};

console.log(coloredCircle);