//Object Oriented Programming (OOP)
var Arithmetic = /** @class */ (function () {
    function Arithmetic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 23);
var obj2 = new Arithmetic(11, 23);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition is" + Ret);
Ret = obj2.Substraction();
console.log("Substraction is" + Ret);
