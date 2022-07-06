import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective 
{

  constructor(private _obj:ElementRef) 
  {}

  @HostListener('mouseenter')onmouseenter()
{
  this._obj.nativeElement.style.color="red";
}

@HostListener('mouseleave')onmouseleave()
{
  this._obj.nativeElement.style.color="blue";
}

}
