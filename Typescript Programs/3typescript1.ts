//Object Oriented Programming (OOP)

class Arithmetic
{
    No1:number;
    No2:number;

    constructor(a:number,b:number)
    {
        this.No1=a;
        this.No2=b;
    }
    Addition()
    {
        var Ans:number=0;
        Ans=this.No1+this.No2;
        return Ans;
    }
    Substraction()
    {
        var Ans:number=0;
        Ans=this.No1-this.No2;
        return Ans;
    }
    Multiplication()
    {
        var Ans:number=0;
        Ans=this.No1*this.No2;
        return Ans;
    }
    Division()
    {
        var Ans:number=0;
        Ans=this.No1/this.No2;
        return Ans;
    }
}

var obj1=new Arithmetic(10,23);
var obj2=new Arithmetic(11,12);

var Ret:number=0;

Ret=obj1.Addition();
console.log("Addition is"+Ret);

Ret=obj2.Substraction();
console.log("Substraction is"+Ret);

Ret=obj1.Multiplication();
console.log("Multiplication is"+Ret);

Ret=obj2.Division();
console.log("Division is"+Ret);

