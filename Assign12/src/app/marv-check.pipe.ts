import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvCheck'
})
export class MarvCheckPipe implements PipeTransform {

  transform(value: number,param:string):any
  {
    if(param=="prime")
    {
      var flag:boolean=true;
        for(var i:number=2;i<=value/2;i++)
        { 
          if(value%i==0)
          {
            flag=false;
          }
        }
        if(flag==true)
        {
          return "number is prime";
        }
        else
        {
          return "number is not prime";
        }
    }
    if(param=="perfect")
    {
      var Sum:number=0;
      for(var i:number=1;i<value;i++)
      { 
        if(value%i==0)
        {
          Sum=Sum+i;
        }
      }
      if(Sum==value)
      {
        return "number is perfect";
      }
      else
      {
        return "number is not perfect";
      }
    }

    if(param=="even")
    {
        if(value%2==0)
        {
          return "number is even";
        }

    }

    if(param=="odd")
    {
      if(value%2!=0)
      {
        return "number is odd";
      }
    }

  }

}
