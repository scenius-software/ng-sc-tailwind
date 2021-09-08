import { ToastRef } from './toast-ref.model';

export abstract class Toast {

  modalInstance!: ToastRef;
  isOpen = false;

  abstract onInjectInputs(inputs: any): void;

  dismiss(output?: any): void {
    this.isOpen = false;
    setTimeout(() => this.modalInstance.dismiss(output), 200);
  }
}