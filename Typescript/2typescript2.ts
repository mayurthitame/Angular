
var Arr:number[]=[10,22,34,56,89,56,1]
var iRet:number
iRet=Addition(Arr)
console.log(iRet)

function Addition(Brr:number[])
{
    var iCnt:number
    var iLength=Brr.length
    var iSum:number=0
    for(iCnt=0;iCnt<iLength;iCnt++)
    {
        iSum=iSum+Brr[iCnt]
    }
    return iSum
}
