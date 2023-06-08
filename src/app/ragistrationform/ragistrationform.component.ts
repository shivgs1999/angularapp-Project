import { Component, ViewChild } from '@angular/core';
import { Ragistration, User } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ragistrationform',
  templateUrl: './ragistrationform.component.html',
  styleUrls: ['./ragistrationform.component.css']
})
export class RagistrationformComponent {

  
  city:string[] = ['Indore','Mumbai','Kolkata','Delhi']

  userModel = new Ragistration('Shivam','Suradkar',22,'shiv@codemind.com',7757851215,'','','','')

  @ViewChild('userForm', {static:true}) userForm!: NgForm; // Get reference to the form

  onSubmit(){
    console.log(this.userModel);
     this.userForm.reset(); // Reset the form
  }

  onReset(){
    this.userForm.reset(); // Reset the form
  }
}


