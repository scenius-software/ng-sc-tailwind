import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-form-listbox',
  templateUrl: './form-listbox.component.html',
  styleUrls: ['./form-listbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormListboxComponent implements OnDestroy {
  form = new FormGroup({
    select: new FormControl('')
  });

  private _$destroyed = new Subject();

  constructor(private _cdRef: ChangeDetectorRef) {
    this.form.valueChanges
    .pipe(
    takeUntil(this._$destroyed))
    .subscribe(v => {
      this._cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this._$destroyed.next();
    this._$destroyed.complete();
  }
}
