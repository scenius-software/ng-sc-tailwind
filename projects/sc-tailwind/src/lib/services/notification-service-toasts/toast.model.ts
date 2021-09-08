import { ToastRef } from './toast-ref.model';

export abstract class Toast {

  toastInstance!: ToastRef;
  isOpen = false;

  abstract onInjectInputs(inputs: any): void;

  dismiss(output?: any): void {
    this.isOpen = false;
    this.toastInstance.dismiss(output);
  }
}