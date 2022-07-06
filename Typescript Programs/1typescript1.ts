function Maximum(value1:number,value2:number,value3:number):number
{
    var max:number=0,i:number=0;
    for(i=0;i<3;i++)
    {
        if(value1>value2)
        {
            max=value1;  
        }
        else
        {
            max=value2;
        }
        value1=max;
        value2=value3;
    }
  return max;
}

var no1:number=23;
var no2:number=89;
var no3:number=6;
var ret:number=0;
ret=Maximum(no1,no2,no3);
console.log("Maximum number is:"+ret);