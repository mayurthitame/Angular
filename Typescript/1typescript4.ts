function ChkPrime(numb:number)
{
    var i:number=0;
    var flag:boolean=false;
    for(i=2;i<numb;i++)
    {
        if(numb%i==0)
        {
            flag=true;
        }
    }
    return flag;
}
var ret:boolean;
var num:number=12;
ret=ChkPrime(num);

if(ret==true)
{
    console.log("Number is not prime");

}
else{
    console.log("Number is prime");
}