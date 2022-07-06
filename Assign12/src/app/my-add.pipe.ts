import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number
  {
    var Addition:number=0;
    if(args[0]==3)
    {
      Addition=value+3;
    }
    return Addition;
  }

}
