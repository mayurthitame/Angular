import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private _obj:ElementRef) { 

  this._obj.nativeElement.style.background="blue";
  this._obj.nativeElement.style.fontweight="bold";
  
}
}
