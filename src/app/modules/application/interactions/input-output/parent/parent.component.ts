import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  question: string = '';
  childAnswer: string = '';
  enableButtons: boolean = false;

  questions = [
    { id: 1, question: '3 x 5', response: 15 },
    { id: 2, question: '2 x 7', response: 14 },
    { id: 3, question: '6 x 4', response: 24 },
    { id: 4, question: '9 x 6', response: 54 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  ask(q: any) {
    this.enableButtons = true;
    this.question = `Toto ! ${q.question} ?`;
    this.questions = this.questions.filter(question => {
      return question.id !== q.id;
    });
  }

}
