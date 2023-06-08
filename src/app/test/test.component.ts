import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myInput:string = 'I am Test Parent Component'
  userName: string = 'HarryPotter'
  @Input() test2inp: string;
  // taking value from parent
  @Input() childName: string;
  // constructor() { }
 
    // 1. declear the Output Property with the help of EventEmitter
  @Output()fromChild:EventEmitter<string> = new EventEmitter<string>();



  ngOnInit() {
    console.log('From Child test to parent test2:', this.test2inp);
    console.log('From Child test to parent test2:', this.childName);
  }
   //2. written method
  sendToParent() {
    //4. Custom Event i.e fromChild
     this.fromChild.emit(`Data is Coming from Child component`);
  }
}
