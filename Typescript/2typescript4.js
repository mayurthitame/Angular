var value;
var iRet;
iRet = Armstrong(153);
if (iRet == true) {
    console.log("number is Armstrong");
}
else {
    console.log("number is not Armstrong");
}
function Armstrong(no) {
    var iDigit = 0, iCnt = 0, iSum = 0, iDigcnt = 0, iMult = 0;
    var flag = false;
    var iTemp;
    iTemp = no;
    while (no != 0) {
        iDigcnt++;
        no = no / 10;
    }
    no = iTemp;
    while (no != 0) {
        iMult = 1;
        iDigit = no % 10;
        for (iCnt = 0; iCnt < iDigcnt; iCnt++) {
            iMult = iMult * iDigit;
        }
        iSum = iSum + iMult;
        no = no / 10;
    }
    if (iSum == iTemp) {
        flag = true;
    }
    return flag;
}
