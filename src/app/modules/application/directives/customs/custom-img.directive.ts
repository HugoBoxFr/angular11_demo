import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomImg]'
})
export class CustomImgDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    el.nativeElement.style.width = '20px';
    el.nativeElement.style.transition = 'all .2s ease-in';
  }


  @HostListener('mouseenter') mouseover(): void {
    this.renderer.setStyle(this.el.nativeElement, 'width', '150px');
  }

  @HostListener('mouseleave') mouseleave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'width', '20px');
  }

}
