//typecasting from object to array
const  cars:Object={
    ford:{name:"Ford",model:546},
    vokswagen:{name:"Vokswagen",model:893},
    audi:{name:"Audi",model:673},
    benz:{name:"Benz",model:123}
};
const carsArr:Array<Object>=Object.keys(cars).map((key:string):string=>cars[key]);
console.log("carsArr",carsArr);