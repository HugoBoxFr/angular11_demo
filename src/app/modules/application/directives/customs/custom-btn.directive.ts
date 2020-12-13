import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomBtnDirective]'
})
export class CustomBtnDirective {

  constructor(
    private el: ElementRef
  ) { 
    el.nativeElement.style.color = "white";
    el.nativeElement.style.backgroundColor = "lightgreen";
    el.nativeElement.style.borderRadius = '25px';
    el.nativeElement.style.border = 'none';
    el.nativeElement.style.padding = '10px';
  }

}
