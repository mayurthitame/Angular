
var value:number
var iRet:boolean
iRet=Armstrong(153)
if(iRet==true)
{
    console.log("number is Armstrong");
}
else
{
    console.log("number is not Armstrong");
}

function Armstrong(no:number):boolean
{
    var iDigit:number=0,iCnt:number=0,iSum:number=0,iDigcnt:number=0,iMult:number=0
    var flag:boolean=false
     var iTemp:number
     iTemp=no
     while(no!=0)
     {
        iDigcnt++
        no=no/10
     }
     no=iTemp
    while(no!=0)
    {
        iMult=1
        iDigit=no%10
        for(iCnt=0;iCnt<iDigcnt;iCnt++)
        {
            iMult=iMult*iDigit
        }
        iSum=iSum+iMult
        no=no/10
    }
    if(iSum==iTemp)
    {
        flag=true
    }
    return flag
}
