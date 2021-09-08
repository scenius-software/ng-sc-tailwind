import { ComponentRef } from '@angular/core';
import { ScTailwindNotificationService } from '../sc-tailwind-notification-service.service';
import { Observable, Subject } from 'rxjs';
import { Toast } from './toast.model';

export class ToastRef {

  private result$ = new Subject<any>();

  constructor(
    private toast: ComponentRef<Toast>,
    private notificationService: ScTailwindNotificationService
  ) {
    this.toast.instance.toastInstance = this;
  }

  dismiss(output: any): void {
    this.result$.error(output);
    this.notificationService.removeNotification(this);
    this.destroy$();
  }

  onResult(): Observable<any> {
    return this.result$.asObservable();
  }

  private destroy$(): void {
    this.toast.destroy();
    this.result$.complete();
  }

}