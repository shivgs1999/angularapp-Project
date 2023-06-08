import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css'],
  providers: [ServicesService]
})
export class Service2Component implements OnInit {

  // This is nothing but constructor dependancy injection .
  // We have inject MyService class . 
  constructor(private objMyserviceService: ServicesService) { 
    
  }

  ngOnInit() {

    // create intstance of myservice class 

    this.objMyserviceService.GetData();
  }

  Print() {
    // instance of MyserviceService 
    this.objMyserviceService.PrintFile();
  }

}
