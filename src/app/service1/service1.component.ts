import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
  providers: [ServicesService]
})
export class Service1Component implements OnInit {

  // We have inject MyserviceService class  
  constructor(private objMyserviceService : ServicesService) { }

  ngOnInit() {
  }

  Print() {
    // instance of myservice class
    // object 
 
 /// angular 
    this.objMyserviceService.PrintFile();
  }
 
}
