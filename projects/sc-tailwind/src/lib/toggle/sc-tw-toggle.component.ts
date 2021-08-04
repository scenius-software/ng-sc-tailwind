import { ToggleHandleDirective } from './toggle-handle.directive';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-tw-toggle',
  templateUrl: './sc-tw-toggle.component.html',
  styleUrls: ['./sc-tw-toggle.component.css'],
})
export class ScTwToggleComponent implements AfterContentInit {
  toggled = false;

  @Input('containerClass')
  containerClass!: string;
  @Input('activeContainerClass')
  activeContainerClass!: string;

  @ContentChild(ToggleHandleDirective)
  handleChild!: ToggleHandleDirective;

  transitionClass!: string;

  constructor() {}

  toggleButton() {
    this.toggled = !this.toggled;
  }

  ngAfterContentInit(): void {
    console.log(this.handleChild);
    this.transitionClass = this.handleChild.transitionClass;
  }
}
