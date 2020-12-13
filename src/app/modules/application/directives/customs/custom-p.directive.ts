import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomPDirective]'
})
export class CustomPDirective {

  constructor(
    private el: ElementRef
  ) {
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.backgroundColor = 'blue';
    el.nativeElement.style.display = 'inline-block';
  }

}
