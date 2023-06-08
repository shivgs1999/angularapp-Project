import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() myInp:string;

  constructor() { }

  ngOnInit() {
    console.log(`From child Student Component:`,this.myInp);
    
  }

}
