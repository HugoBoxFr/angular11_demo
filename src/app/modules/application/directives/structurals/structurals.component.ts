import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-structurals',
  templateUrl: './structurals.component.html',
  styleUrls: ['./structurals.component.scss']
})
export class StructuralsComponent implements OnInit {
  @ViewChild('userName') inputName: any;
  @ViewChild('userAge') inputAge: any;

  name: string = '';
  nameInput: boolean = true;

  age: number = 0;
  birthdays: any[] = [];

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  addName(name: string) {
    this.name = name;
  }

  resetName() {
    this.name = '';
    this.inputName.nativeElement.value = '';
    this.nameInput = true;
  }

  testName(name: any) {
    name.length > 0 ? this.nameInput = false : '';
    name.length === 0 ? this.nameInput = true : '';
  }

  addAge(age: number) {
    this.age = age;
    this.birthdays = [];
    for (let i = 0; i < age; i++) {
      this.birthdays.push(i);
    }
  }

  resetAge() {
    this.age = 0;
    this.inputAge.nativeElement.value = '';
    this.birthdays = [];
  }
}
