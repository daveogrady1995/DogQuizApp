// Keep the Input import for now, you'll remove it later:
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { QuizService } from './quiz.service';

import { Question } from './question';
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: [ './questions.component.css' ],
})
export class QuestionsComponent {
    questions: Question[];
    currentQuestion: Question;

    constructor(
      private quizService: QuizService,
      private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
      // on init retrieve first question id which is 1
      this.quizService.getQuestion(1).then(question => this.currentQuestion = question);
    }

    nextQuestion(): void {
      this.quizService.getQuestion(this.currentQuestion.id + 1).then(question => this.currentQuestion = question);
    }

    previousQuestion(): void {
      this.quizService.getQuestion(this.currentQuestion.id - 1).then(question => this.currentQuestion = question );
    }

    // getAllQuestions(): void {
    //   this.quizService.getQuestions().then(questions => this.questions = questions);
    // }
}