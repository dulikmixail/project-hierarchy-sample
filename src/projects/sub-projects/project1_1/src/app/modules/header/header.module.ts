import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderToken} from "src/core/header/src/lib/header.directive";
import {OverrideHeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{
    provide: HeaderToken,
    useValue: OverrideHeaderComponent
  }]
})
export class HeaderModule {
}
