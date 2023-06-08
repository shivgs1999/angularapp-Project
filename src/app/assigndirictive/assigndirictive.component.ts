import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigndirictive',
  templateUrl: './assigndirictive.component.html',
  styleUrls: ['./assigndirictive.component.css']
})
export class AssigndirictiveComponent implements OnInit {

  title = 'checkBoxAss';
  selectedValue: any;
  
  cources = [ 'Angular', 'React Js' , 'Java', 'python', 'testing']; 
  ngOnInit() {}

   showMe:boolean =false;

    show(){
        this.showMe  = ! this.showMe;
    } 
    getSelectedValue(value:any){
      console.log(value.target.value);
      this.selectedValue = value.target.value;
    }
  }

