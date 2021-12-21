import {CoreHeaderDirective} from 'src/core/header/src/lib/header.directive';
import {Component} from '@angular/core';

export class Header extends CoreHeaderDirective {
  additionalMethod() {
    console.log('Project1_1 HeaderComponent additionalMethod')
  }
}

@Component({
  selector: 'project1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends Header {
}
