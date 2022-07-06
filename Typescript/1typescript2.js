function Area(radius) {
    var pi = 3.14;
    var Area = 0;
    Area = pi * (radius * radius);
    return Area;
}
var radius = 5;
var ret = 0;
ret = Area(radius);
console.log("Maximum number is:" + ret);
