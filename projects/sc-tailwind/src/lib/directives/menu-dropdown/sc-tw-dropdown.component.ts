import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Renderer2,
} from '@angular/core';
import { ScTwDropdownButtonDirective } from './sc-tw-dropdown-button.directive';
import { ScTwDropdownContentDirective } from './sc-tw-dropdown-content.directive';
import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'sc-tw-dropdown',
  templateUrl: './sc-tw-dropdown.component.html',
  styleUrls: ['./sc-tw-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTwDropdownComponent implements AfterContentInit {
  @ContentChild(ScTwDropdownButtonDirective)
  buttonChild!: ScTwDropdownButtonDirective;
  @ContentChild(ScTwDropdownContentDirective)
  contentChild!: ScTwDropdownContentDirective;

  showContent = false;
  _$showContent = new Subject();

  constructor(
    private _cdRef: ChangeDetectorRef,
    private _renderer: Renderer2
  ) {}

  ngAfterContentInit(): void {
    this.contentChild.$blurred
      .pipe(filter(() => (() => this.showContent)()))
      .subscribe(() => this._$showContent.next());
    this.buttonChild.$clicked.subscribe(() => this._$showContent.next());
    this._$showContent
      .pipe(debounceTime(1))
      .subscribe(() => this.buttonClicked());
  }

  private buttonClicked() {
    if (this.contentChild) {
      this.showContent = !this.showContent;
      this._cdRef.markForCheck();
    }
  }
}
