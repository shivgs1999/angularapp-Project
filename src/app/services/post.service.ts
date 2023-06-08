import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // 1). create variable of Url inside servise
  postUrl = 'https://jsonplaceholder.typicode.com/posts/'
  // 2). inject the HttpClient to get refrence of all methods like get,put,post,path,delet,etc.
  constructor(private httpClient: HttpClient) { }

  // 3). create method to get all data
  GetAllPosts(): Observable<any>{
   return this.httpClient.get(this.postUrl);
   }
  
  GetPostById(id: any): Observable<any> {
    return this.httpClient.get(this.postUrl+ id);
   }

   UpdatePostById(id: any, body: any) : Observable<any> {
    return this.httpClient.put(this.postUrl + id, body);
   }

   DeletePostById(id:any): Observable<any> {
    return this.httpClient.delete(this.postUrl + id);
   }
   
   CreatePost(body: any) : Observable<any> {
    return this.httpClient.post(this.postUrl, body);
   }
}
