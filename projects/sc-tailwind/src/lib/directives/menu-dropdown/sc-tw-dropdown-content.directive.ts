import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[sc-tw-dropdown-content]',
})
export class ScTwDropdownContentDirective {
  $blurred = new Subject<boolean>();

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  @HostListener('document:mousedown', ['$event'])
  onBlur(event: any) {
    if (!this.element.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.$blurred.next();
    }
  }
}
