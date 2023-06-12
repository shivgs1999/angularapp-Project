import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  wikiURL = 'https://en.wikipedia.org/w/api.php';

  constructor(private httpClient: HttpClient) { }

  getData(searchQuery: string) {
    let params = new HttpParams();
    params = params.append('action', 'query');
    params = params.append('format', 'json');
    params = params.append('list', 'search');
    params = params.append('utf8', '1');
    params = params.append('srsearch', searchQuery);
    params = params.append('origin', '*');

    return this.httpClient.get(this.wikiURL, { params: params });
    
  }
}

