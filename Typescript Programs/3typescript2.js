//Object Oriented Programming (OOP)
var Circle = /** @class */ (function () {
    function Circle(a) {
        this.Radius = a;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var Area = 0;
        Area = (this.PI) * (this.Radius * this.Radius);
        return Area;
    };
    return Circle;
}());
var obj1 = new Circle(12);
var obj2 = new Circle(11);
var Ret = 0;
Ret = obj1.Area();
console.log("Area is" + Ret);
Ret = obj2.Area();
console.log("Area is" + Ret);
