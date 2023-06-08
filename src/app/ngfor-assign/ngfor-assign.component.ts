import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-assign',
  templateUrl: './ngfor-assign.component.html',
  styleUrls: ['./ngfor-assign.component.css']
})
export class NgforAssignComponent implements OnInit {

  heading: string = 'Dropdown Binding';

  countries=[
    {id:'1',name:'India'},
    {id:'2',name:'United State'}
   ]
   arrStates: Array<any>= [
    {id:'s1',parentId:'2',name:'California'},
    {id:'s2',parentId:'2',name:'Texas'},
    {id:'s3',parentId:'2',name:'Florida'},
    {id:'s4',parentId:'1',name:'Maharashtra'},
    {id:'s5',parentId:'1',name:'Goa'},
    {id:'s6',parentId:'1',name:'Chennai'},
   ]

   states : Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  onClick(val: any) {
    this.states = this.arrStates.filter(c => c.parentId == val.target.value);
   }
}
