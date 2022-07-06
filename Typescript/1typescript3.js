function DisplayFactors(num) {
    var i = 0;
    for (i = 0; i <= num / 2; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}
var num = 20;
DisplayFactors(num);
