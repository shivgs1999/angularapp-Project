import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
// ~~~~~~~~~~ Step 1 Declearation of Subject and BehaviorialSubject Observable
  // decalre subject obserable.
//  userName = new Subject<any>();
  // declear BehaviorSubject Observable.
userName = new BehaviorSubject('Angular Ui Developer');

  constructor() { 

   }

  getData(){

  }
}
