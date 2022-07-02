//SINGLE INHERITANCE

// Base class
class Student {
    Name: string;
    constructor(name: string) {
      this.Name = name;
    }
  }
  // Deriving Teacher class
  class Teacher extends Student {
    Idnumber: number;
    constructor(name: string, idnumber: number) {
      super(name);
      this.Idnumber = idnumber;
    }
    display(): void {
      console.log("Teacher's Name: " + this.Name);
      console.log("Teacher's Idnumber " + this.Idnumber);
    }
  }
  // Create Object
  let object = new Teacher("madhubala", 320114110043);
  object.display();


  //MULTIPLE INHERITANCE

  //Base class
class Institute {
  Type(): void {
    console.log("Autonomous");
  }
}
  
// Inherites from Institute
class Branch extends Institute{
  Branchsubject(): void {
    console.log("computer science");
  }
}
  
// Inherites all properties of 
// Institute and Branch class
class Exam extends Branch {
  Date(): void {
    console.log("20-07-2022");
  }
}
  
// Object creation
let obj = new Exam();
obj.Type();
obj.Branchsubject();
obj.Date();