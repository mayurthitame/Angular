function Fibbo(numb) {
    var no1 = 0;
    var iCount = 2;
    var no2 = 1;
    var sum = 0, i;
    console.log(no1);
    console.log(no2);
    for (i = 2; i <= numb; i++) {
        sum = no1 + no2;
        if (sum > numb) {
            break;
        }
        console.log(sum);
        no1 = no2;
        no2 = sum;
        iCount++;
    }
}
var num = 21;
Fibbo(num);
