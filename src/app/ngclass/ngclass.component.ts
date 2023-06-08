import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  storeFirebase;
  people:any[] = [
    {
      "name": 'jack',
      "country": 'UK'
  },
  {
    "name": 'Sumit',
    "country": 'USA'
},
{
  "name": 'Anup',
  "country": 'HK'
},
{
  "name": 'Codemind',
  "country": 'UK'
},
{
  "name": 'Rocky',
  "country": 'HK'
},
{
  "name": 'surya',
  "country": 'USA'
},
]
  constructor(private fbService: FirebaseService) { }

  ngOnInit() {

    this.fbService.getPostData().pipe(
      map(responseData => {
        // empty array 
        const postArray = [];

        // for in loop
        for(const key in responseData) {

          // check key 
          if(responseData.hasOwnProperty(key)) {
            // push the new value into array 
            postArray.push({...responseData[key], id:key})
          }
        }
        return postArray;
      } )
    ).subscribe(res => {
      console.log('after manipulate the data', res);
    })
  } 

}
