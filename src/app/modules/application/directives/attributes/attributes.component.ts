import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  title = 'Attributes directives';
  styleExp = 'italic';
  sizeExp = 20;
  weightExp = 500;
  colorExp = 'red';
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  addText(text: any): any {
    this.text = text;
  }

}
