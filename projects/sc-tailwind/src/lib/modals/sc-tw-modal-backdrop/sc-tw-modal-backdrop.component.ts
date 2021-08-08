import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Modal } from '../../services/modal-service-modals/modal.model';
@Component({
  selector: 'sc-tw-modal-backdrop',
  templateUrl: './sc-tw-modal-backdrop.component.html',
  styleUrls: ['./sc-tw-modal-backdrop.component.css'],
})
export class ScTwModalBackdropComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef })
  private modalContainer!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  createModal<T extends Modal>(component: Type<T>): ComponentRef<T> {
    this.modalContainer.clear();

    const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(component);

    return this.modalContainer.createComponent(factory, 0);
  }
}
