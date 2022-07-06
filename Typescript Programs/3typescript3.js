//Object Oriented Programming (OOP)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new Circle(12);
var obj2 = new Circle(11);
var obj3 = new CircleX(2);
var Ret = 0;
Ret = obj1.Area();
console.log("Area is" + Ret);
Ret = obj2.Area();
console.log("Area is" + Ret);
Ret = obj3.Circumference();
console.log("Circumference is" + Ret);
