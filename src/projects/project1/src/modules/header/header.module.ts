import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderToken} from "src/core/header/src/lib/header.directive";
import {HeaderComponent} from "src/projects/project1/src/modules/header/header/header.component";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{
    provide: HeaderToken,
    useValue: HeaderComponent
  }]
})
export class HeaderModule {
}
