import {Component} from '@angular/core';
import {HeaderToken} from "src/core/header/src/lib/header.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  HeaderToken = HeaderToken;
  title = 'project1';

  constructor() {
  }
}
