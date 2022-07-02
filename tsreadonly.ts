class Circle {
    private readonly radius: number;//using readonly keyword
  
    public constructor(radius: number) {
      // radius cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.radius = radius;
    }
    public getValue():number{
        return this.radius;
    }
  
  }
        
  const circle = new Circle(5);
  console.log(circle.getValue());
  