import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';  

import 'rxjs/add/operator/toPromise';

import { Question } from './question';

@Injectable()
export class QuizService {

    private quizUrl = 'api/questions';  // URL to web api

    constructor(private http: Http) { }

    getQuestions(): Promise<Question[]> {
        return this.http.get(this.quizUrl)
            .toPromise()
            .then(response => response.json().data as Question[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
        
    getQuestion(id: number): Promise<Question> {
        const url = `${this.quizUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Question)
            .catch(this.handleError);
    }

    // private headers = new Headers({'Content-Type': 'application/json'});

    // update(hero: Hero): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), { headers: this.headers })
    //         .toPromise()
    //         .then(() => hero)
    //         .catch(this.handleError);
    // }

    // create(name: string): Promise<Hero> {
    //     return this.http
    //         .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
    //         .toPromise()
    //         .then(res => res.json().data as Hero)
    //         .catch(this.handleError);
    // }

    // delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, { headers: this.headers })
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }
}

