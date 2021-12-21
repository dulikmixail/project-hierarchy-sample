import {
  AbstractType,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  InjectionToken,
  Injector,
  Input,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';

type Outputs = Record<string, (event: any) => void>;
type Inputs = Record<string, any>;

@Directive({
  selector: '[dynamicComponent]'
})
export class DynamicComponentDirective<T> implements OnInit {
  @Input('dynamicComponent') token: InjectionToken<Type<T>> | AbstractType<T>;
  @Input() inputs?: Inputs = {}; // TODO add realization
  @Input() outputs?: Outputs = {}; // TODO add realization
  private componentRef: ComponentRef<T>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
  }

  private createComponent() {
    const component = this.injector.get(this.token) as any;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainerRef.createComponent<any>(componentFactory, 0, this.injector);
  }

  ngOnInit() {
    this.createComponent();
  }
}
