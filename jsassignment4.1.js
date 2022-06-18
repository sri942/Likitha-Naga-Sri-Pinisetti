function Rectangle(length,breadth)    //constructor
{ this.length=length;
    this.breadth=breadth;
    this.area=function()
{ return this.length*this.breadth;};
this.perimeter=function()
{ return 2*(this.length+this.breadth);};
} 
var r=new Rectangle(3,2);
console.log('area=',r.area());
console.log('perimeter=',r.perimeter());