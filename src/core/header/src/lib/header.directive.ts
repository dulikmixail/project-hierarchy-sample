import {Directive, Input, OnInit} from '@angular/core';
import {HeaderServiceToken} from "src/core/header/src/lib/header-service.token";

/**
 * Used to override components that inherit from CoreHeaderDirective.
 * Example:
 *  @NgModule({
 *    providers: [{ provide: HeaderToken, useValue: SomeHeaderComponent }]
 *  })
 *
 * '<ng-template [dynamic-component]="HeaderToken"></ng-template>'
 */
export abstract class HeaderToken {
}

@Directive({
  selector: '[libHeader]',
})
export class CoreHeaderDirective extends HeaderToken implements OnInit {
  @Input() title: string

  constructor(private headerService: HeaderServiceToken) {
    super();
  }

  ngOnInit() {
    this.headerService.show();
  }
}
