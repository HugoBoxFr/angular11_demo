import { Component, OnInit } from '@angular/core';
import Popper from 'popper.js';

declare var $: any;

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.scss']
})
export class CustomsComponent implements OnInit {
  title = 'Custom directives';

  constructor() { }

  ngOnInit(): void {
    $('[data-toggle="popover"]').popover();
  }
}
