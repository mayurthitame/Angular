var Arr = [10, 22, 34, 56, 89, 56, 1];
var iRet;
iRet = Addition(Arr);
console.log(iRet);
function Addition(Brr) {
    var i;
    var iLength = Brr.length;
    var iMax = 0;
    var iMax2 = 0;
    for (i = 0; i < iLength; i++) {
        if (Brr[i] > iMax) {
            iMax2 = iMax;
            iMax = Brr[i];
        }
        else if (Brr[i] > iMax2 && Brr[i] != iMax) {
            iMax2 = Brr[i];
        }
    }
    return iMax2;
}
