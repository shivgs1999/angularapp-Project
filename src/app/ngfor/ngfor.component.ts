import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title: string = 'Top 3 Bollywood Movies';

  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar Hirani', cast:'Amir Khan', releaseDate:'2009' },
    { title: 'Lagaan', director: 'Ashutosh ', cast: 'Amir Khan', releaseDate: '2000'},
    { title: 'Tanhaji: The Unsang Warrior', director:'Om Raut', cast: 'Ajay', releaseDate: '2020'}
  ]
  // inject the UserServise
  constructor(private userService:UserService) { }

  ngOnInit() {

    // subscribe observable using Observer three Methods
   //we can optionally include the three callback methods

    // this.userService.GetUsers().subscribe(
    //   (res => {console.log(`user res`, res);   //next Method
    // }), 
    // (error:any) => {console.log(`error Occured`, error);   //error Method  
    // }),
    // () => console.log(`completed`);  // complete Method
    

    // this.userService.GetUsers().subscribe(res => {
    //   console.log(`Getting Data Form Ngfor Comp`, res);
      
    // })

    // Custom Observable
    const obs = new Observable((observer) => {
      console.log(`My Observable Start`);
      observer.next(`1`)   //data string
      observer.next(`2`)
      //observer.error(`error emitted`)
      observer.next(`3`)
      observer.next(`4`)
      observer.next(`5`)
    })

    // obs.subscribe(
    //   val => { console.log(val)}, //next
    //   error => {console.log(`error`)},//error
    //   () => {console.log(`Completed`)} //completed  
    // )}
    
    obs.subscribe(val => {
      console.log(val);
    })

  }
}
