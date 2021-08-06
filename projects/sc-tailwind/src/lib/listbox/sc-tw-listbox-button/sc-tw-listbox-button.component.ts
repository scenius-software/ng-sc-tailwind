import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Component({
  selector: 'sc-tw-listbox-button',
  templateUrl: './sc-tw-listbox-button.component.html',
  styleUrls: [ './sc-tw-listbox-button.component.scss' ]
})
export class ScTwListboxButtonComponent implements OnDestroy {

  $clicked: Observable<any>;

  private _$clicked = new Subject();

  constructor() {
    this.$clicked = this._$clicked.asObservable();
  }

  ngOnDestroy(): void {
    this._$clicked.complete();
  }

  clicked() {
    this._$clicked.next();
  }
}
