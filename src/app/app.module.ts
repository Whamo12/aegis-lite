import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AppService } from './app.service';
import { IssueSummaryComponent } from './issue-summary/issue-summary.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'issue-summary',
    pathMatch: 'full'
  },
  {
    path: 'create-issue',
    component:  IssueDetailComponent,
  },
  {
    path: 'issue-details/:id',
    component:  IssueDetailComponent,
  },
  {
    path: 'issue-summary',
    component:  IssueSummaryComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IssueDetailComponent,
    IssueSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    ReactiveFormsModule
  ],
  providers: [ HttpClient, AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
