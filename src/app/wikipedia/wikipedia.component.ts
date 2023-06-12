import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  searchQuery: string;
  searchData: any = {};


  constructor(private wikiServise: WikipediaService) { }

  ngOnInit() {
// Initialize the searchQuery
this.searchQuery = '';
this.fetchData();
}

fetchData() {
this.wikiServise.getData(this.searchQuery).subscribe(
  (response) => {
    this.searchData = response;
    console.log(this.searchData);
  },
  (error) => {
    console.log(error);
  }
);
}

search() {
this.fetchData();
  }
}