import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-templetform',
  templateUrl: './templetform.component.html',
  styleUrls: ['./templetform.component.css']
})
export class TempletformComponent implements OnInit {

  isSubmited: boolean = false;
  user: User;
  username = `Rocky`;
  defaultCourse = `Angular`;
  genders = [
    {
      id: '1', value: 'male'
    },
    {
      id: '2', value: 'female'
    }
  ]
  defaultGenderValue = 'male'; 
  courseArr : any [] = [
     `Angular`, `HTML`, `CSS`, `JavaScript`, `Bootstrap`, `JavaScript`
  ]
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
      this.isSubmited = true;
   
    console.log(`My templet for values`, form.value);
   // console.log(`UserName`, form.controls[`username`].value);
   // console.log(`form Submitted`, form.submitted);   
    //api/ saveuserData(user:User);  // api end point

    this.user = new User();
    this.user.userName = form.value.userDetail.username;
    this.user.email = form.value.userDetail.email;
    this.user.course = form.value.course;
    this.user.gender = form.value.gender;

    console.log('After bind value to User Object', this.user);
     // api/Saveuser(this.user);

     form.reset( );

     form.controls["course"].setValue("Angular");
     form.controls["gender"].setValue("Male");
  
    
  }

  getCourse(value){
    console.log(value.target.value); 
  }
}
