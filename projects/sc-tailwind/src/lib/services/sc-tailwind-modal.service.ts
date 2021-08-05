import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { ModalRef } from 'projects/sc-tailwind/src/lib/services/modal-service-modals/modal-ref.model';
import { Modal } from 'projects/sc-tailwind/src/lib/services/modal-service-modals/modal.model';
import { ScTwModalBackdropComponent } from 'projects/sc-tailwind/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class ScTailwindModalService {
  private modalContainer!: HTMLElement;
  private modalContainerFactory!: ComponentFactory<ScTwModalBackdropComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {
    this.setupModalContainerFactory();
  }

  open<T extends Modal>(component: Type<T>, inputs?: any): ModalRef {
    this.setupModalContainerDiv();

    const modalContainerRef = this.appRef.bootstrap(this.modalContainerFactory, this.modalContainer);

    const modalComponentRef = modalContainerRef.instance.createModal(component);

    if (inputs) {
      modalComponentRef.instance.onInjectInputs(inputs);
    }

    const modalRef = new ModalRef(modalContainerRef, modalComponentRef);
    setTimeout(() => modalComponentRef.instance.isOpen = true, 100);
    return modalRef;
  }

  private setupModalContainerDiv(): void {
    this.modalContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(this.modalContainer);
  }

  private setupModalContainerFactory(): void {
    this.modalContainerFactory = this.componentFactoryResolver.resolveComponentFactory(ScTwModalBackdropComponent);
  }

}
