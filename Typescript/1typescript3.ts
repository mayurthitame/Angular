function DisplayFactors(num:number)
{
    var i:number=0;
    for(i=0;i<=num/2;i++)
    {
        if(num%i==0)
        {
            console.log(i);
        }
    }
}

var num:number=20;
DisplayFactors(num);