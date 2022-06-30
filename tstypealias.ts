type LaptopYear=number;
type LaptopType=string;
type LaptopModel=string;
type Laptop={year:LaptopYear,
            type:LaptopType,
            model:LaptopModel  }
const laptopYear:LaptopYear=2015
const laptopType:LaptopType="hp"
const laptopModel:LaptopModel="pavilion"
const lapptopYear:LaptopYear=2009
const lapptopType:LaptopType="lenovoo"
const lapptopModel:LaptopModel="ideapad"
const laptop:Laptop={year:laptopYear,
                    type:laptopType,
                    model:laptopModel};
 const lapptop:Laptop={year:lapptopYear,
                        type:lapptopType,
                        model:lapptopModel};
    
console.log(laptop);

console.log(lapptop);