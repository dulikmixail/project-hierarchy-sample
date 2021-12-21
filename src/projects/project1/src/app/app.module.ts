import {HeaderModule} from './../modules/header/header.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DynamicComponentModule} from "src/core/dynamic-component/src/lib/dynamic-component.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, DynamicComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
