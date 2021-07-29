import { ContentChild, Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ScTwDropdownButtonDirective } from "./sc-tw-dropdown-button.directive";
import { ScTwDropdownContentDirective } from "./sc-tw-dropdown-content.directive";

@Directive({
  selector: '[sc-tw-dropdown]'
})
export class ScTwDropdown {
  @ContentChild(ScTwDropdownButtonDirective) buttonChild!: ScTwDropdownButtonDirective;
  @ContentChild(ScTwDropdownContentDirective, { read: ElementRef }) contentChild!: ScTwDropdownContentDirective;

  private showContent = false;

  constructor(private renderer: Renderer2) {
  }

  @HostListener('click') onClick() {
    this.showContent = !this.showContent;
    if (this.contentChild) {
      if (this.showContent) {
        // @ts-ignore
        this.renderer.removeClass(this.contentChild.nativeElement, 'hidden');
      } else {
        // @ts-ignore
        this.renderer.addClass(this.contentChild.nativeElement, 'hidden');
      }
    }
  }
}
