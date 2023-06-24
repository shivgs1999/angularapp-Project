import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class NewpostService {
   endpoint = 'https://jsonplaceholder.typicode.com/postsdfgdgsd';
  constructor(private http: HttpClient) { }


  getPost(): Observable<Post[]> {
    return this.http
    .get<Post[]>(this.endpoint)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = ''
   
    if (error.error instanceof ErrorEvent) {
      // client side error 

      errorMessage = `Error: ${error.error.message}`

      console.log('client side error', errorMessage);
    }
    else {
      // server-side error

      errorMessage = `Error Code: ${error.status}`
      console.log('server side error', errorMessage);
    }
  
    return throwError(errorMessage);
  }
}