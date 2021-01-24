import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input('mumQuestion') question: any;
  @Output() public answer = new EventEmitter();
  inputDisabled: boolean = true;

  inputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.question ? this.inputDisabled = false : this.inputDisabled = true;
  }

  answerHandler(e: any) {
    this.answer.emit(e.target.value);
    this.resetInput();
  }

  resetInput() {
    this.inputValue = '';
    this.inputDisabled = true;
  }
}
