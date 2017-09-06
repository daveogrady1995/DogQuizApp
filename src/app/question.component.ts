// Keep the Input import for now, you'll remove it later:
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { QuizService } from './quiz.service';

import { Question } from './question';
@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: [ './question.component.css' ],
})
export class QuestionComponent implements OnInit {
    //@Input() hero: Hero;
    question: Question;

    constructor(
      private quizService: QuizService,
      private route: ActivatedRoute,
      //private location: Location
    ) {}

    ngOnInit(): void {
    //   this.route.paramMap
    //     .switchMap((params: ParamMap) => this.quizService.getQuestion(+params.get('id')))
    //     .subscribe(question => this.question = question);
    }

    // goBack(): void {
    //   this.location.back();
    // }

    // save(): void {
    //   this.heroService.update(this.hero)
    //     .then(() => this.goBack());
    // }
    
    
}