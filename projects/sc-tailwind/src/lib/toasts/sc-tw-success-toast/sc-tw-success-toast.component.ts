import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Toast } from '../../services/notification-service-toasts/toast.model';

@Component({
  selector: 'sc-tw-sc-tw-success-toast',
  templateUrl: './sc-tw-success-toast.component.html',
  styleUrls: ['./sc-tw-success-toast.component.css'],
  animations: [
    trigger('Fading', [
      state('void', style({ opacity: 0, transform: 'Translatex(30px)' })),
      state('*', style({ opacity: 1, transform: 'Translate(0)' })),
      transition(':enter', animate('250ms ease-out')),
      transition(':leave', animate('150ms ease-in')),
    ])
  ]
})
export class ScTwSuccessToastComponent extends Toast implements OnInit {

  title!: string;
  message!: string;
  timeout!: number;

  onInjectInputs(inputs: any): void {
    this.title = inputs.title;
    this.message = inputs.message;
    this.timeout = inputs.timeout;
  }

  closeToast() {
    this.isOpen = false;
    setTimeout(() => {
      this.dismiss();
    }, 150);
  }

  ngOnInit() {
    this.isOpen = true;
    setTimeout(() => {
      this.closeToast();
    }, this.timeout);
  }
}
