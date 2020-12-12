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
        description: '*ngIf *ngFor',
        icon: 'fa fa-arrow-right',
        link: 'structurals',
        color: 'red'
      },
      {
        name: 'Attribute directives',
        image: 'https://via.placeholder.com/286x80',
        description: 'Attribute directives',
        icon: 'fa fa-arrow-right',
        link: 'attributes',
        color: 'red'
      }
    ];
  }

  ngOnInit(): void {
  }

}
