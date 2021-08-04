import { ToggleHandleDirective } from './toggle-handle.directive';
import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,,
} from '@angular/core';

@Component({
  selector: 'sc-tw-toggle',
  templateUrl: './sc-tw-toggle.component.html',
  styleUrls: ['./sc-tw-toggle.component.css'],
})
export class ScTwToggleComponent implements AfterContentInit {
  toggled = false;

  // Styling options
  @Input('containerClass')
  containerClass!: string;
  @Input('activeContainerClass')
  activeContainerClass!: string;
  transitionClass!: string;

  // Exposed variables
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() selected!: boolean;

  @ContentChild(ToggleHandleDirective)
  handleChild!: ToggleHandleDirective;

  constructor() {}

  toggleButton() {
    this.toggled = !this.toggled;
    this.onChange.emit(this.toggled);
  }

  ngAfterContentInit(): void {
    // Maps the transition class from the handle to the parent directive
    this.transitionClass = this.handleChild.transitionClass;

    // Map initial starting state
    this.toggled = this.selected;
  }
}
