import { ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Toast } from './toast.model';

export class ToastRef {

  private result$ = new Subject<any>();

  constructor(
    private modal: ComponentRef<Toast>,
  ) {
    this.modal.instance.toastInstance = this;
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
    this.result$.complete();
  }

}