var Arr = [10, 22, 34, 56, 89, 56, 1];
var iRet;
iRet = Addition(Arr);
console.log(iRet);
function Addition(Brr) {
    var iCnt;
    var iLength = Brr.length;
    var iSum = 0;
    for (iCnt = 0; iCnt < iLength; iCnt++) {
        iSum = iSum + Brr[iCnt];
    }
    return iSum;
}
