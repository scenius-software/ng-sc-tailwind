import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sc-tw-toggle-handle]',
})
export class ToggleHandleDirective {
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  @Input('transitionClass')
  transitionClass!: string;
}
