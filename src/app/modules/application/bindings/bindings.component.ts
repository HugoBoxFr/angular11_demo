import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {
  title = 'Interactions';

  bindings: any;
  ok = 'test';

  constructor() {
    // this.bindings =
    // [
    //   {
    //     name: 'Interpolation',
    //     image: 'https://via.placeholder.com/286x80',
    //     description: 'Simple way to display code properties in view',
    //     icon: 'fa fa-arrow-right',
    //     link: 'interpolations',
    //     color: 'red'
    //   },
      // {
      //   name: 'Bindings',
      //   image: 'https://via.placeholder.com/286x80',
      //   description: 'Property binding, event binding & two way-bindings',
      //   icon: 'fa fa-arrow-right',
      //   link: 'bindings',
      //   color: 'red'
      // },
      // {
      //   name: 'Input - Output',
      //   image: 'https://via.placeholder.com/286x80',
      //   description: 'Interactions parent-child',
      //   icon: 'fa fa-arrow-right',
      //   link: 'parent-child',
      //   color: 'red'
      // },
    // ];
   }

  ngOnInit(): void {
  }

}
