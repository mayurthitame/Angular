//Object Oriented Programming (OOP)

class Circle
{
    Radius:number;
    PI:number;

    constructor(a:number)
    {
        this.Radius=a;
        this.PI=3.14;
    }
    Area()
    {
        var Area:number=0;
        Area=(this.PI)*(this.Radius*this.Radius);
        return Area;
    }

}
class CircleX extends Circle
{
    Circumference()
    {
        var Ans:number=0;
        Ans=2*this.PI*this.Radius;
        return Ans;
    }
}

var obj1=new Circle(12);
var obj2=new Circle(11);
var obj3=new CircleX(2);

var Ret:number=0;

Ret=obj1.Area();
console.log("Area is"+Ret);

Ret=obj2.Area();
console.log("Area is"+Ret);

Ret=obj3.Circumference();
console.log("Circumference is"+Ret);




