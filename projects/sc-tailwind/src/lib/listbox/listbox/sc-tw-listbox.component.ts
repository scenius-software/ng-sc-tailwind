import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild, ElementRef,
  forwardRef,
  HostListener,
  OnDestroy,
  Output,
  Provider
} from '@angular/core';
import { ScTwListboxButtonComponent } from "../sc-tw-listbox-button/sc-tw-listbox-button.component";
import { Subject } from "rxjs";
import { debounceTime, filter, takeUntil } from "rxjs/operators";
import { ScTwListboxOptionsComponent } from "projects/sc-tailwind/src/lib/listbox/sc-tw-listbox-options/sc-tw-listbox-options.component";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const LISTBOX_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ScTwListboxComponent),
  multi: true,
};

@Component({
  selector: 'sc-tw-listbox',
  templateUrl: './sc-tw-listbox.component.html',
  styleUrls: ['./sc-tw-listbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LISTBOX_CONTROL_VALUE_ACCESSOR],
})
export class ScTwListboxComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
  @ContentChild(ScTwListboxButtonComponent)
  listboxButton: ScTwListboxButtonComponent | undefined;

  @ContentChild(ScTwListboxOptionsComponent)
  options: ScTwListboxOptionsComponent | undefined

  @Output() optionSelected: any;
  selectedOption: any;

  menuOpen = false;
  onChange: any = () => {
  };
  onTouched: any = () => {
  };
  forceClose = new Subject<any>();

  private _$destroyed = new Subject();

  constructor(private _cdRef: ChangeDetectorRef, private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event']) clickout(event: any) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.forceClose.next();
    }
  }

  ngAfterContentInit(): void {
    if (this.listboxButton) {
      this.listboxButton?.$clicked
      ?.pipe(takeUntil(this._$destroyed))
      ?.subscribe(() => this._buttonClicked());
    }
    if (this.options) {
      this.options?.optionSelected
      .pipe(
      takeUntil(this._$destroyed),
      debounceTime(16)
      ).subscribe(o => {
        this.optionSelected = o;
        if (this.onChange) {
          this.onChange(o);
        }
        this.menuOpen = false;
        this._cdRef.markForCheck();
      });
      this.forceClose
      .pipe(
      takeUntil(this._$destroyed),
      filter(() => this.menuOpen)
      ).subscribe(() => {
        this.menuOpen = false;
        this._cdRef.markForCheck();
      });
      if(this.options?.optionbutton?.first) {
        this.writeValue(this.options.optionbutton.first.data);
        this.onChange(this.options.optionbutton.first.data);
        this._cdRef.markForCheck();
      }
    }
  }

  ngOnDestroy(): void {
    this._$destroyed.next();
    this._$destroyed.complete();
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.onChange(this.selectedOption);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.selectedOption = obj;
  }

  private _buttonClicked() {
    this.menuOpen = !this.menuOpen;
    this._cdRef.markForCheck();
  }
}
