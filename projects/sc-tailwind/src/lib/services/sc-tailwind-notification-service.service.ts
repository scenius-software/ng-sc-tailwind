import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { ToastRef } from './notification-service-toasts/toast-ref.model';
import { Toast } from './notification-service-toasts/toast.model';
import { Observable, Subject } from 'rxjs';
import { ScTwToastContainerComponent } from '../toasts/sc-tw-toast-container/sc-tw-toast-container.component';
import { ScTwDefaultToastComponent } from '../toasts/sc-tw-default-toast/sc-tw-default-toast.component';
import { ScTwSuccessToastComponent } from '../toasts/sc-tw-success-toast/sc-tw-success-toast.component';

@Injectable({
  providedIn: 'root'
})
export class ScTailwindNotificationService {

  private _subject = new Subject<Array<ToastRef>>();
  private _idx = 0;
  private modalContainer!: HTMLElement;
  private modalContainerFactory!: ComponentFactory<ScTwToastContainerComponent>;
  private modalContainerRef!: ComponentRef<ScTwToastContainerComponent>;
  private toasts: Array<ToastRef> = []

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {
    this.setupModalContainerFactory();
  }

  private setupModalContainerDiv(): void {
    // If we have no container yet create it
    if (!this.modalContainer) {
      this.modalContainer = document.createElement('div');
      document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
    }
  }

  private setupModalContainerFactory(): void {
    this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ScTwToastContainerComponent);
  }

  getObservable(): Observable<Array<ToastRef>> {
    return this._subject.asObservable();
  }

  triggerCustom<T extends Toast>(component: Type<T>, inputs?: any): ToastRef {
    this.setupModalContainerDiv();

    if (!this.modalContainerRef) {
      this.modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);
    }

    const modalComponentRef = this.modalContainerRef.instance.createToast(component);

    if (inputs) {
      modalComponentRef.instance.onInjectInputs(inputs);
    }

    const toastRef = new ToastRef(modalComponentRef, this);
    this.toasts.push(toastRef);
    this._subject.next(this.toasts);
    return toastRef;
  }

  info(title: string, message: string, timeout = 3000) {
    this.triggerCustom(ScTwDefaultToastComponent, { title, message, timeout })
  }

  success(title: string, message: string, timeout = 3000) {
    this.triggerCustom(ScTwSuccessToastComponent, { title, message, timeout })
  }

  removeNotification(toast: ToastRef) {
    const removeIndex = this.toasts.indexOf(toast);
    if (!removeIndex) {
      return;
    }
    this.toasts.splice(removeIndex, 1);
    this._subject.next(this.toasts);
  }

  // success(title: string, message: string, timeout = 3000) {
  //   this._subject.next(new Notification(this._idx++, NotificationType.success, title, message, timeout));
  // }

  // warning(title: string, message: string, timeout = 3000) {
  //   this._subject.next(new Notification(this._idx++, NotificationType.warning, title, message, timeout));
  // }

  // error(title: string, message: string, timeout = 0) {
  //   this._subject.next(new Notification(this._idx++, NotificationType.error, title, message, timeout));
  // }
}
