import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent implements OnInit {
  buttonDisabled = true;
  light = false;
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSwitch() {
    this.light = !this.light;
  }

}
