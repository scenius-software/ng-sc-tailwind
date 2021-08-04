import {
  ApplicationRef,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScTailwindModalService {
  appElementRef: ElementRef;
  factoryResolver: ComponentFactoryResolver;
  constructor(
    @Inject(ComponentFactoryResolver) factoryResolver: any,
    private applicationRef: ApplicationRef,
    injector: Injector
  ) {
    this.appElementRef = injector.get(
      applicationRef.componentTypes[0]
    ).elementRef;

    this.factoryResolver = factoryResolver;

    console.log(this.appElementRef);
  }

  // setRootViewContainerRef(viewContainerRef: any) {
  //   this.rootViewContainer = viewContainerRef;
  // }

  open(component: Element): void {}

  dismissAll(): void {}
}
