//class

class Value {
    private val: number;
  //constructor
    public constructor(val: number) {
      this.val = val;
    }
  
    public getValue(): number {
      return this.val;
    }
  }
  //creation of object
        
  const num = new Value(789);
  
  console.log(num.getValue());