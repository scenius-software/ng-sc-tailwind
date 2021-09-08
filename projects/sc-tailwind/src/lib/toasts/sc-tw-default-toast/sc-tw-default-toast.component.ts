import { Component, ViewEncapsulation } from '@angular/core';
import { Toast } from '../../services/notification-service-toasts/toast.model';

@Component({
  selector: 'sc-tw-sc-tw-default-toast',
  templateUrl: './sc-tw-default-toast.component.html',
  styleUrls: ['./sc-tw-default-toast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScTwDefaultToastComponent extends Toast {

  title!: string;
  message!: string;

  onInjectInputs(inputs: any): void {
    this.title = inputs.title;
    this.message = inputs.message;
  }
}
