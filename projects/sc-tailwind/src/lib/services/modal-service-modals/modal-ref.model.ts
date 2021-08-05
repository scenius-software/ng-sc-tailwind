import { ComponentRef } from '@angular/core';
import { ScTwModalBackdropComponent } from 'projects/sc-tailwind/src/lib/modals/sc-tw-modal-backdrop/sc-tw-modal-backdrop.component';
import { Observable, Subject } from 'rxjs';

import { Modal } from './modal.model';

export class ModalRef {

  private result$ = new Subject<any>();

  constructor(
    private modalContainer: ComponentRef<ScTwModalBackdropComponent>,
    private modal: ComponentRef<Modal>,
  ) {
    this.modal.instance.modalInstance = this;
  }

  close(output: any): void {
    this.result$.next(output);
    this.destroy$();
  }

  dismiss(output: any): void {
    this.result$.error(output);
    this.destroy$();
  }

  onResult(): Observable<any> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.modal.destroy();
    this.modalContainer.destroy();
    this.result$.complete();
  }

}