import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ScTailwindNotificationService } from '../../services/sc-tailwind-notification-service.service';
import { Subscription } from 'rxjs';
import { Toast } from '../../services/notification-service-toasts/toast.model';
import { ToastRef } from '../../services/notification-service-toasts/toast-ref.model';

@Component({
  selector: 'sc-tw-sc-tw-toast-container',
  templateUrl: './sc-tw-toast-container.component.html',
  styleUrls: ['./sc-tw-toast-container.component.css']
})
export class ScTwToastContainerComponent implements OnInit, OnDestroy {

  @ViewChild('toastContainer', { read: ViewContainerRef })
  private toastContainer!: ViewContainerRef;
  toasts: ToastRef[] = [];
  private _subscription!: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private notificationService: ScTailwindNotificationService
  ) { }

  ngOnInit() {
    this._subscription = this.notificationService.getObservable().subscribe(toasts => this._updateToasts(toasts));
  }

  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }

  _updateToasts(toasts: ToastRef[]) {
    this.toasts = toasts;
    console.log(toasts);
  }

  createToast<T extends Toast>(component: Type<T>): ComponentRef<T> {
    const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(component);
    return this.toastContainer.createComponent(factory, 0);
  }
}