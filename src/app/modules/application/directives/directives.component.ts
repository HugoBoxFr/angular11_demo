import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  directives: any;

  constructor() {
    this.directives =
    [
      {
        name: 'Structural directives',
        image: 'https://via.placeholder.com/286x80',
        description: '*ngIf *ngFor *ngSwitch',
        icon: 'fa fa-arrow-right',
        link: 'structurals',
        color: 'red'
      },
      {
        name: 'Attribute directives',
        image: 'https://via.placeholder.com/286x80',
        description: 'ngClass ngStyle ngModel',
        icon: 'fa fa-arrow-right',
        link: 'attributes',
        color: 'red'
      },
      {
        name: 'Custom directives',
        image: 'https://via.placeholder.com/286x80',
        description: 'Create own directives',
        icon: 'fa fa-arrow-right',
        link: 'customs',
        color: 'red'
      }
    ];
  }

  ngOnInit(): void {
  }

}
