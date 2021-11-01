import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'sc-tw-listbox-option',
  templateUrl: './sc-tw-listbox-option.component.html',
  styleUrls: ['./sc-tw-listbox-option.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScTwListboxOptionComponent implements OnInit, OnDestroy {
  @Input() data!: any;
  OptionClicked = new Subject<object>();

  constructor(private _cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.OptionClicked.complete();
  }

  @HostListener('click', ['$event.target']) onClick($event: any) {
    this.OptionClicked.next(this.data);
  }
}
