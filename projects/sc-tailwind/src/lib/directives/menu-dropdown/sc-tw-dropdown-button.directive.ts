import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[sc-tw-dropdown-button]',
})
export class ScTwDropdownButtonDirective implements OnDestroy {
  $clicked = new Subject<boolean>();
  $blurred = new Subject<boolean>();

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  @HostListener('click') onClick() {
    this.$clicked.next();
  }

  @HostListener('document:mousedown', ['$event'])
  onBlur(event: any) {
    if (!this.element.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.$blurred.next();
    }
  }

  ngOnDestroy(): void {
    this.$clicked.complete();
  }
}
