import { ToggleHandleDirective } from './toggle-handle.directive';
import {
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
export class ScTwToggleComponent implements OnInit {
  toggled = false;

  @Input('containerClass')
  containerClass!: string;

  @ContentChild(ToggleHandleDirective)
  handleChild!: ToggleHandleDirective;

  constructor() {}

  toggleButton() {
    this.toggled = !this.toggled;
  }

  ngOnInit(): void {}
}
