import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl: string = 'http://localhost:3000/todos';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClinet: HttpClient) { }

  // create - post
  create(data: any) : Observable<any> {
    let API_URL = `${this.apiUrl}`;
    // we are sending httppost requestto server i.e 3000
    // return we get Observable as Response
  return this.httpClinet.post(API_URL, data);
  }

  // read - get
  list() {
    return this.httpClinet.get(`${this.apiUrl}`);
  }

  //Update - put or Patch
  update(id:any,data:any): Observable<any>{
 let API_URL = `${this.apiUrl}/${id}`;
    return this.httpClinet.put(API_URL, data,{headers: this.headers});
  }

  delete(id:any): Observable<any> {
    let API_URL = `${this.apiUrl}/${id}`;
   return this.httpClinet.delete(API_URL);
  }
}
