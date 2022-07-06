
var Ret:number=0

//Regular Function
function Addition1(No1:number,No2:number):number
{
    var Ans:number=0
    Ans=No1+No2
    return Ans
}

Ret=Addition1(11,21)
console.log("Addition is:"+Ret)

///Anonymous Functions(Function without name)
var Addition2=function(No1:number,No2:number):number
{
    var Ans:number=0
    Ans=No1+No2
    return Ans
}
Ret=Addition2(11,21);
console.log("Addition is:"+Ret);

//Fat arrow/Lambda/Arraow function
var Addition3=(No1:number,No2:number):number=>
{
    var Ans:number=0;
    Ans=No1+No2;
    return Ans;
}
Ret=Addition3(11,21);
console.log("Addition is:"+Ret);