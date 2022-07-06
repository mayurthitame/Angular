function Maximum(value1, value2, value3) {
    var max = 0, i = 0;
    for (i = 0; i < 3; i++) {
        if (value1 > value2) {
            max = value1;
        }
        else {
            max = value2;
        }
        value1 = max;
        value2 = value3;
    }
    return max;
}
var no1 = 23;
var no2 = 89;
var no3 = 6;
var ret = 0;
ret = Maximum(no1, no2, no3);
console.log("Maximum number is:" + ret);
