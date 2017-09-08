import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Question } from './question';
import { QuizService } from './quiz.service';

@Component({
  selector: 'quiz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {
    questions: Question[];

    constructor(
        private router: Router,
        private quizService: QuizService) { }

    ngOnInit(): void {
        this.quizService.getQuestions().then(questions => this.questions = questions);
    }

}