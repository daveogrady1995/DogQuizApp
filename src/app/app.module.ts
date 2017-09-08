import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { QuestionsComponent }   from './questions.component';
import { QuizService } from './quiz.service';

import { AppRoutingModule } from './app-routing.module'; 

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionsComponent,
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
