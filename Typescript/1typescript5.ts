function Fibbo(numb:number)
{
    var no1:number=0;
    var iCount:number=2
    var no2:number=1;
    var sum:number=0,i:number;
    console.log(no1);
    console.log(no2);
    
    for(i=2;i<=numb;i++)
    {
        sum=no1+no2;
        if(sum>numb)
        {
            break
        }
        console.log(sum);
        no1=no2;
        no2=sum;
        iCount++

    }
    
}
var num:number=21;

Fibbo(num);
