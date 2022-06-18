function Point(x,y,x1,y1){
    this.x=x;
    this.y=y;
    this.x1=x1;
    this.y1=y1;
    this.distanceTo=function()
    {return Math.sqrt((Math.pow(this.x1-this.x,2))+(Math.pow(this.y1-this.y,2)))
    };
}
var points=new Point(10,100,25,5);
console.log(points.distanceTo());
