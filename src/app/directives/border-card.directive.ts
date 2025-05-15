import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true,
})
export class BorderCardDirective {

  constructor(private el:ElementRef) { 
  this.setBorder('#151217');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#DA001E');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#151217');
  }
  
  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
