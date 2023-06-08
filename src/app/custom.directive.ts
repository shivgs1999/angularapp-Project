import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  // dependency injection
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundcolor = 'gray';
   }


}
