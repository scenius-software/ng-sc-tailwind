import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { ScTwDropdownButtonDirective } from './sc-tw-dropdown-button.directive';
import { ScTwDropdownContentDirective } from './sc-tw-dropdown-content.directive';

@Component({
  selector: 'sc-tw-dropdown',
  templateUrl: './sc-tw-dropdown.component.html',
  styleUrls: ['./sc-tw-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTwDropdownComponent implements AfterContentInit {
  @ContentChild(ScTwDropdownButtonDirective)
  buttonChild!: ScTwDropdownButtonDirective;
  @ContentChild(ScTwDropdownContentDirective, { read: ElementRef })
  contentChild!: ScTwDropdownContentDirective;

  showContent = false;

  constructor(
    private _cdRef: ChangeDetectorRef,
    private _renderer: Renderer2
  ) {}

  ngAfterContentInit(): void {
    this.buttonChild?.$clicked?.subscribe((x) => this.buttonClicked());
    this.buttonChild?.$blurred?.subscribe((x) => this.buttonBlurred());
  }

  private buttonBlurred() {
    if (this.contentChild) {
      this.showContent = false;
      this._cdRef.markForCheck();
    }
  }

  private buttonClicked() {
    console.log('wee');
    if (this.contentChild) {
      this.showContent = !this.showContent;
      this._cdRef.markForCheck();
    }
  }
}
