import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Issue } from './issue-form';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  private api = 'http://localhost:3000';
  error: Error;

  createIssue(issue: any) {
    return this.httpClient.post(`${this.api}/issue`, issue).pipe(
      catchError(this.handleError)
    );
  }

  retrieveIssue(id: number) {
    return this.httpClient.get(`${this.api}/issue/` + id).pipe(
      catchError(this.handleError)
    );
  }

  retrieveAllIssues(): Observable<Issue[]> {
    return this.httpClient.get<String[]>(`${this.api}/issues`).pipe(
      catchError(this.handleError)
    );
  }

  updateissue(issue: Issue) {
    return this.httpClient.put(`${this.api}/issue`, issue).pipe(
      catchError(this.handleError)
    );
  }

  deleteIssue(id: number) {
    return this.httpClient.delete(`${this.api}/issue/` + id).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return [];
  }

}
