var Arr = [10, 22, 34, 56, 89, 56, 1];
var iRet;
iRet = Maximum(Arr);
console.log(iRet);
function Maximum(Brr) {
    var iCnt;
    var iLength = Brr.length;
    var iMax;
    iMax = Brr[0];
    for (iCnt = 0; iCnt < iLength; iCnt++) {
        if (iMax < Brr[iCnt]) {
            iMax = Brr[iCnt];
        }
    }
    return iMax;
}
