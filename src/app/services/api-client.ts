import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  get<T>(url: string, options?: any): Observable<T> {
    return this.http.get(`${this.apiUrl}/${url}`, options).pipe(
      map((response: any) => {
        return response as T;
      }),
      catchError(this.handleErrors)
    );
  }

  private handleErrors(error: HttpErrorResponse) {
    return throwError(() => error.message);
  }
}
