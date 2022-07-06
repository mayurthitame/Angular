
var Arr:number[]=[10,22,34,56,89,56,1]
var iRet:number
iRet=Maximum(Arr)
console.log(iRet)

function Maximum(Brr:number[])
{
    var iCnt:number
    var iLength=Brr.length
    var iMax:number
    iMax=Brr[0]
    for(iCnt=0;iCnt<iLength;iCnt++)
    {
        if(iMax<Brr[iCnt])
        {
            iMax=Brr[iCnt]
        }
    }
    return iMax
}
