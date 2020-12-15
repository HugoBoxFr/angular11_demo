import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interpolations',
  templateUrl: './interpolations.component.html',
  styleUrls: ['./interpolations.component.scss']
})
export class InterpolationsComponent implements OnInit {
  @ViewChild('userName') inputName: any;
  
  title = 'Interactions';

  name = '';
  nameInput = true;

  constructor() { }

  ngOnInit(): void {
  }

  addName(name: string): string {
    return this.name = name;
  }

  testName(name: any): void {
    name.length > 0 ? this.nameInput = false : this.nameInput = true;
    name.length === 0 ? this.nameInput = true : this.nameInput = false;
  }

}
