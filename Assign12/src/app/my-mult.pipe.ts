import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number
   {
    var Mult:number=0;
    if(args[0]==3)
    {
      Mult=value*3;
    }
    return Mult;
  }

}
