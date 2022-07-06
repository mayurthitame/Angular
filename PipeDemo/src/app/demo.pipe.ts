import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform 
{

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    var str:String="";
    if(args[0]=="PPA")
    {
      str="Batch start from 9 july "+value;
    }  
     else
    {
      str="Batch start from 10 july "+value;
    }
    return str;
  }
}


