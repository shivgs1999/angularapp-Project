import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gifs: any[] = [];
  searchTerm: string = '';

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.gifService.getGIF().subscribe((res: any) => {
      this.gifs = res.data.map((item: any) => item.images);
      console.log('Gifs', this.gifs );
      
      
    });
  }

  onSearchClick() {
    this.gifService.searchTerm = this.searchTerm;
    this.gifService.searchGifs().subscribe((response: any) => {
      this.gifs = response.data.map((item: any) => item.images);
    });
  }
}   