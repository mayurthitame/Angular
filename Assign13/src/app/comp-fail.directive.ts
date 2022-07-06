import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFail]'
})
export class CompFailDirective {

  constructor(private _obj:ElementRef) { }
  @HostListener('mouseenter')onmouseenter()
  {
    this._obj.nativeElement.style.color="red";
  }

  @HostListener('mouseleave')onmouseleave()
  {
    this._obj.nativeElement.style.color="black";
  }
}
