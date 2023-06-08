import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  data = [];
  searchTerm: string = '';

  constructor(private wikiServise: WikipediaService) { }

  ngOnInit() {

    this.wikiServise.getData().subscribe((res: any) => {
      this.data = res.query.search;
      console.log('Api Data is ', this.data );
    });

    // onSearchClick() {
    //   this.wikiServise.searchTerm = this.searchTerm;
    //   this.wikiServise.getData().subscribe((response: any) => {
    //     this.data = response.data.map((item: any) => item.images);
    //   });
  }
  
}
