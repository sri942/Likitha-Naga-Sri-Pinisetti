//partial
interface Name{
    x:string;
    y:number;
}
let namedValue:Partial<Name>={};
namedValue.x="hello";
namedValue.y=56;
console.log(namedValue);

//Required
interface Car {
    make: string;
    model: string;
    mileage: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };
  console.log(myCar);

  //Record
  const nameAgeMap: Record<string, number> = {
    'Krithi': 25,
    'Clara': 29
  };
  
  console.log(nameAgeMap);

  //Omit
  interface Student {
    name: string;
    age: number;
    idnumber: number;
  }
      
  const val: Omit<Person, 'age' | 'idnumber'> = {
    name: 'jenny'
     };
  
  console.log(val);


  //Pick
  interface Person {
    name: string;
    age: number;
    location?: string;
  }
              
  const bob: Pick<Person, 'name'> = {
    name: 'Bob'
   };
  
  console.log(bob);

  //Exclude
  type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;

console.log(typeof value);