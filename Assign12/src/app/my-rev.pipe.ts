import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{
  
  transform(value: String): String
   {
   
     let i:any=0;
     var str:any[50]=value;
     var temp:String[50]="";
      for(i=(str.length)-1;i>=0;i--)
      {
        temp=temp+str[i];
      }
    
      return temp;
  }


}
