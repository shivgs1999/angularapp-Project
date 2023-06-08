import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // inejct the router class
  constructor(private router: Router, private firebaseService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {
    // this.firebaseService.getPostData().subscribe(res=> {
    //   console.log('get data from firebase', res);
    // })
  }
  GotoProduct(){
    this.router.navigate(['product']);
  }

  checkUser(username, password) {
   var output = this.authService.checkUserNameandPassword(username, password);
   console.log('output', output);
   
   if (output) {
    this.router.navigate(['product']);
   } else {
    alert('Invalid user name and password')
   }
  }
}
