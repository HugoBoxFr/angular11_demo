import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-structurals',
  templateUrl: './structurals.component.html',
  styleUrls: ['./structurals.component.scss']
})
export class StructuralsComponent implements OnInit {
  @ViewChild('userName') inputName: any;

  title = 'Structural Directives';

  name = '';
  nameInput = true;

  age = 0;
  birthdays: any[] = [];

  color = '';
  colors: any = ['blue', 'red', 'yellow', 'pink', 'orange', 'green', 'black'];

  constructor() {
  }

  ngOnInit(): void {
  }

  addName(name: string): string {
    return this.name = name;
  }

  resetName(): void {
    this.name = '';
    this.inputName.nativeElement.value = '';
    this.nameInput = true;
  }

  testName(name: any): void {
    name.length > 0 ? this.nameInput = false : this.nameInput = true;
    name.length === 0 ? this.nameInput = true : this.nameInput = false;
  }

  addAge(age: any): any {
    this.age = parseInt(age, 10);
    this.birthdays = [];
    for (let i = 0; i < age; i++) {
      this.birthdays.push(i);
    }
  }

  getColor(color: string): string {
    return this.color = color;
  }
}
