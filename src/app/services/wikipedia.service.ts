import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  searchTerm = ''
  wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space&origin=*';
  wikiURL2 = 'https://en.wikipedia.org/w/api.php/?action=query,&format=json,&list=search,&utf8=1,&srsearch=&space, origin=*';
  constructor(private httpClient: HttpClient) { }

  getData (){
    return this.httpClient.get(this.wikiURL)
  }

  searchTitle() {
    const apiUrl = `${this.wikiURL2}&q=${this.searchTerm}`; // Add this line
    return this.httpClient.get(apiUrl);
  }
}
