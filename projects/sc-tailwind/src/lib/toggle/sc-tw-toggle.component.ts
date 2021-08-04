import { ToggleHandleDirective } from './toggle-handle.directive';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'sc-tw-toggle',
  templateUrl: './sc-tw-toggle.component.html',
  styleUrls: ['./sc-tw-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTwToggleComponent
  implements AfterContentInit, ControlValueAccessor {
  constructor(private _ref: ElementRef, private _cdRef: ChangeDetectorRef) {}

  @Input()
  toggled = false;

  onTouched = () => {};
  onChange = (toggled: boolean) => {};

  // Styling options
  @Input('customClass')
  customClass!: string;
  @Input('activeContainerClass')
  activeContainerClass!: string;
  transitionClass!: string;

  @ContentChild(ToggleHandleDirective)
  handleChild!: ToggleHandleDirective;

  writeValue(toggled: boolean): void {
    this.toggled = toggled;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleButton() {
    this.toggled = !this.toggled;
    if (this.onChange) {
      this.onChange(this.toggled);
    }
    this._cdRef.markForCheck();
  }

  ngAfterContentInit(): void {
    // Maps the transition class from the handle to the parent directive
    this.transitionClass = this.handleChild?.transitionClass;
  }
}
