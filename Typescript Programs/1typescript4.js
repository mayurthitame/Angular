function ChkPrime(numb) {
    var i = 0;
    var flag = false;
    for (i = 2; i < numb; i++) {
        if (numb % i == 0) {
            flag = true;
        }
    }
    return flag;
}
var ret;
var num = 12;
ret = ChkPrime(num);
if (ret == true) {
    console.log("Number is not prime");
}
else {
    console.log("Number is prime");
}
