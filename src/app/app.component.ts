import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';
import { UserService } from './services/user.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  age;
  showAge;
  // injecct the service
  constructor(private firebaseService: FirebaseService, private myService: ServicesService, private UserService:UserService) {
    this.firebaseService.createPost().subscribe(res => {
      console.log('Response from firebase', res);
    })
  }

  // String Interpolation
  title = 'angularapp';
   project ='Basic Angular Application'
  name = 'Shivam';
  lastName = 'Suradkar';
  getName() {
    return this.lastName
  }
// Property Binding 
  imgURL = 'https://img.freepik.com/free-photo/wide-angle-shot…uring-sunset-surrounded-by-grass_181624-22807.jpg';

  // Event binding
  changeImage(e){
      this.imgURL = e.target.value;
      console.log(`catch $event`, e); 
  }
  show(){
    alert(`Button Event Clicked`)
  }

  // method called After inject Service
  ageCalculator() {
  this.showAge = this.myService.ageCalculator(this.age)
 }
 getUserData() {
  this.UserService.GetUsers().subscribe(data => {
   console.log('user data', data);
  });
 }
}
