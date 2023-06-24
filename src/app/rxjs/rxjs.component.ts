import { Component, OnInit } from '@angular/core';
import { from, interval, of, timer } from 'rxjs';
import { filter, map, mergeMap, take, takeLast, takeUntil } from 'rxjs/operators';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit() {

    const source = from([1,2,3,4,5 ]);

    //filter out non-Even numbers

    const res = source.pipe(filter(num => num % 2 != 0))

    res.subscribe(res =>{
      console.log('after filter', res);
    })

    let obs1 = of(1,2,3);
    let obs2 = of(4,5,6);

    obs1.pipe(
      mergeMap(value1 => obs2.pipe(map(value2 => value1 +'' + value2)))
    ).subscribe(res => {
      console.log(res);  
    })

      //ForkJoin
    this.postService.requestDataFromMultipleSources().subscribe(res => {
      console.log('forkJoin: ',res);
    })

    // take Operator

    // const obs = interval(1000);
    // // obs.subscribe(res => {
    // //   console.log('res Interval', res);
    // // })

    // obs.pipe(
    //   take(5)
    // ).subscribe(res => {
    //   console.log('Interval take 5 Counts only', res);
    // })

    // Take Last Operator
    let courses = ['html','Angular','JavaScript', 'TypeScript'];

    const newObs = from(courses)
    newObs.pipe(
      takeLast(2)
      ).subscribe(res =>{
        console.log('Take Last 2',res);
      })

    // TakeUntil Operator 
    const obsTakeuntil = interval(1000);
    let condition = timer(9000);
    obsTakeuntil.pipe(
      takeUntil(condition)     
      ).subscribe(res => {
        console.log('take Until', res);
        
      })
  }
}
