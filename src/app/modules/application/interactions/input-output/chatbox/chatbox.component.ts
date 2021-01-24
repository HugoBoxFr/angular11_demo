import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  @Input('question') question: any;
  @Input('answer') answer: any;
  @Output() public enableButtons = new EventEmitter<boolean>();

  waitingAnswer: any;
  totoAnswer: any;
  sentence: string = '';
  loading: boolean = false;
  momAnswer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    let num1 = parseInt(this.question.slice(7, 8));
    let num2 = parseInt(this.question.slice(11, 12));
    this.waitingAnswer = num1 * num2;
    this.totoAnswer = parseInt(this.answer);

    if (this.waitingAnswer && this.totoAnswer) {
      this.loading = true;
      
      setTimeout(() => {
        this.momAnswer = true;
      }, 1000);

      if (this.waitingAnswer === this.totoAnswer) {
        setTimeout(() => {
          this.sentence = 'Correct !';
          this.resetQuestion();
        }, 2500);
      } else {
        setTimeout(() => {
          this.sentence = "Wrong ! Go to bed !!!";
          this.resetQuestion();
        }, 2500);
      }
    }
  }

  resetQuestion() {
    this.loading = false;
    setTimeout(() => {
      this.question = '';
      this.answer = '';
      this.sentence = '';
      this.waitingAnswer = '';
      this.totoAnswer = '';
      this.momAnswer = false;
      this.enableButtons.emit(false);
    }, 3000);
  }
}
