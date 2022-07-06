function Area(radius:number):number
{
    var pi:number=3.14;
    var Area:number=0;

    Area=pi*(radius*radius);
    return Area;
}

var radius:number=5;

var ret:number=0;
ret=Area(radius);
console.log("Maximum number is:"+ret);