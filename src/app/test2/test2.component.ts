import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  input: string = 'I am from test2 Parent'
  name:string = 'Rocky'
    constructor() { }
  
    ngOnInit() {
      
    }
    // 6. call method here and log that data
    getDataFromChild(data)  {
      console.log(`@outer: from child :-> `,data);
      
    }
  }


