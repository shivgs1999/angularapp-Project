import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  firebaseUrl = 'https://angb6crud-1eb57-default-rtdb.firebaseio.com/';
  firebaseAPIURL = 'https://angb6firebase-3ecc1-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) { }

  createPost() : Observable<any> {
    let postData = {
      title: 'This is angular 8 crud with firebase',
      content: 'This is test firebase'
    }  
  return this.httpClient.post(this.firebaseAPIURL + 'posts.json', postData);
  }
 
  getPostData() : Observable<any> { 
   return this.httpClient.get(this.firebaseAPIURL+ 'posts.json');
  }
}