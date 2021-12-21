import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from 'src/projects/project1/src/app/app.component';
import {AppModule as BaseAppModule} from "src/projects/project1/src/app/app.module";
import {DynamicComponentModule} from "src/core/dynamic-component/src/lib/dynamic-component.module";
import {HeaderModule} from "src/projects/sub-projects/project1_1/src/app/modules/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentModule,
    BaseAppModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
