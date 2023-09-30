import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  public get(url: string, options?: any): Observable<Object> {
    return this.http
      .get(`${this.apiUrl}/${url}`, options)
      .pipe(catchError(this.handleErrors));
  }

  public post(url: string, body: any): Observable<Object> {
    return this.http
      .post(`${this.apiUrl}/${url}`, JSON.stringify(body))
      .pipe(catchError(this.handleErrors));
  }

  public delete(url: string) {
    return this.http
      .delete(`${this.apiUrl}/${url}`)
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }
}
