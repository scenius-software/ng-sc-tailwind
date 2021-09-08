import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Toast } from '../../services/notification-service-toasts/toast.model';

@Component({
  selector: 'sc-tw-sc-tw-default-toast',
  templateUrl: './sc-tw-default-toast.component.html',
  styleUrls: ['./sc-tw-default-toast.component.css'],
  animations: [
    trigger('Fading', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('800ms ease-out')),
      transition(':leave', animate('800ms ease-in')),
    ])
  ]
})
export class ScTwDefaultToastComponent extends Toast {

  title!: string;
  message!: string;

  onInjectInputs(inputs: any): void {
    this.title = inputs.title;
    this.message = inputs.message;
  }
}
