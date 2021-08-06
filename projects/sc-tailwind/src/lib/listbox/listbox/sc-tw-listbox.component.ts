import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { ScTwListboxButtonComponent } from "../sc-tw-listbox-button/sc-tw-listbox-button.component";
import { pipe, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'sc-tw-listbox',
  templateUrl: './sc-tw-listbox.component.html',
  styleUrls: ['./sc-tw-listbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScTwListboxComponent implements AfterContentInit, OnDestroy {

  @ContentChild(ScTwListboxButtonComponent)
  // @ts-ignore
  listboxButton: ScTwListboxButtonComponent;

  menuOpen = false;

  private _$destroyed = new Subject();

  constructor(private _cdRef: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    if(this.listboxButton) {
      this.listboxButton?.$clicked
        ?.pipe(takeUntil(this._$destroyed))
        ?.subscribe(() => this._buttonClicked());
    }
  }

  ngOnDestroy(): void {
    this._$destroyed.next();
    this._$destroyed.complete();
  }

  private _buttonClicked() {
    this.menuOpen = !this.menuOpen;
    this._cdRef.markForCheck();
  }
}
