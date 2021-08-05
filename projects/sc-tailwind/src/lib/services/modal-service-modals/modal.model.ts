import { ModalRef } from './modal-ref.model';

export abstract class Modal {

  modalInstance!: ModalRef;
  isOpen = false;

  abstract onInjectInputs(inputs: any): void;

  close(output?: any): void {
    this.isOpen = false;
    setTimeout(() => this.modalInstance.close(output), 100);
  }

  dismiss(output?: any): void {
    this.isOpen = false;
    setTimeout(() => this.modalInstance.dismiss(output), 200);
  }


}