//Procedure oriented programming(POP)
function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
var value1 = 10;
var value2 = 11;
var Ret = 0;
Ret = Addition(value1, value2);
console.log("Addition is" + Ret);
Ret = Substraction(value1, value2);
console.log("Substraction is" + Ret);
