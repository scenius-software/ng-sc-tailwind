import { Directive, Input, OnInit } from '@angular/core';
import { Subject } from "rxjs";

@Directive({
  selector: '[sc-tw-dropdown-content]'
})
export class ScTwDropdownContentDirective {
  constructor() { }
}
