import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  gifs: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  searchTerm = ''
gifUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=GO9Ll3In0t5jY6WjQW38ohVBhcmfGock&limit=25&rating=g'
gifUrl2 = 'https://api.giphy.com/v1/gifs/search?api_key=8Q8ZErmYa0CE3cMPi1DzfIucohVgWc8f&q=q&limit=25&offset=0&rating=g&lang=en'

  constructor(private httpClient: HttpClient) { }
  getGIF (){
    return this.httpClient.get(this.gifUrl)
  }
  searchGifs() {
    const apiUrl = `${this.gifUrl2}&q=${this.searchTerm}`; // Add this line
    return this.httpClient.get(apiUrl);
  }
} 