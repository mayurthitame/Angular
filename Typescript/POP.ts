//Procedure oriented programming(POP)

function Addition(No1:number,No2:number)
{
    var Ans:number=0;
    Ans=No1+No2;
    return Ans;
}

function Substraction(No1:number,No2:number)
{
    var Ans:number=0;
    Ans=No1-No2;
    return Ans;
}


var value1:number=10;
var value2:number=11;
var Ret:number=0;

Ret=Addition(value1,value2);
console.log("Addition is"+Ret);

Ret=Substraction(value1,value2);
console.log("Substraction is"+Ret);
