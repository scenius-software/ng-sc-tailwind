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

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  @HostListener('click', ["$event"]) onClick($event: any) {
    this.$clicked.next(true);
  }

  ngOnDestroy(): void {
    this.$clicked.complete();
  }
}
