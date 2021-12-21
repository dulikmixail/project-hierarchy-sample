import { NgModule } from '@angular/core';
import { DynamicComponentDirective } from 'src/core/dynamic-component/src/lib/dynamic-component.directive';

@NgModule({
  declarations: [
    DynamicComponentDirective,
  ],
  imports: [
  ],
  exports: [
    DynamicComponentDirective
  ]
})
export class DynamicComponentModule { }
