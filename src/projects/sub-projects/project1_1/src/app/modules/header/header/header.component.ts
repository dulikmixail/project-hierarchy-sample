import {Header} from 'src/projects/project1/src/modules/header/header/header.component';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'project1_1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class OverrideHeaderComponent extends Header implements OnInit {
  ngOnInit(): void {}
}
