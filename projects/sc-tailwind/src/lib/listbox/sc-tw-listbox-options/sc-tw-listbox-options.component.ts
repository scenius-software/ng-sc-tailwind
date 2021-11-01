import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList
} from '@angular/core';
import { ScTwListboxOptionComponent } from "projects/sc-tailwind/src/lib/listbox/sc-tw-listbox-option/sc-tw-listbox-option.component";
import { debounceTime, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'sc-tw-listbox-options',
  templateUrl: './sc-tw-listbox-options.component.html',
  styleUrls: ['./sc-tw-listbox-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScTwListboxOptionsComponent implements OnDestroy, AfterViewInit {
  @ContentChildren(ScTwListboxOptionComponent)
  optionbutton: QueryList<ScTwListboxOptionComponent> | undefined;

  optionSelected = new Subject<any>();
  private _$destroyed = new Subject();
  private subscriptions: any;

  constructor(private _cdRef: ChangeDetectorRef, private _elementRef: ElementRef) {
  }

  ngOnDestroy() {
    this._$destroyed.next();
    this._$destroyed.complete();
  }

  ngAfterViewInit() {
    this.subscriptions = this.optionbutton
    ?.map(b => b.OptionClicked
    .pipe(
    takeUntil(this._$destroyed),
    debounceTime(16)
    ).subscribe(o => {
      this.optionSelected.next(o);
    }));
  }

}
