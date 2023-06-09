import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  birthday = new Date(1999,0,31);
  day = 'friday';
  price = 100; 
  namesearch: string = '';
  productArr : any [] = [
    {
      sno: 1, 
      name: 'Mobile',
      price: '17000 Rs',
      availability : 'Available'
    },
    {
      sno: 2, 
      name: 'TV',
      price: '37000 Rs',
      availability : 'Available'
    },
    {
      sno: 3, 
      name: 'Washing Machine',
      price: '207000 Rs',
      availability : 'Available'
    },
    {
      sno: 4, 
      name: 'Samsung Tab',
      price: '117000 Rs',
      availability : 'Available'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
