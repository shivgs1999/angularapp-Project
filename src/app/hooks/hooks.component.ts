import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck {

  @Input() parentData : string;
  temp: any [] = [] ;
  constructor(private postService: PostService) {
    console.log('Hooks componnet constructor called', this.parentData);
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnChanges called', changes);

    for(const propname in changes) {
      const prop = changes[propname];
      console.log('after loop', prop);

      const { previousValue, currentValue, firstChange} = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Prev value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First chnage ${firstChange}`);

      console.log("--------------------");

    }
  }

  ngOnInit() {
    console.log('Hooks componnet ngOnInit called', this.parentData);
  }

  ngDoCheck(): void {
    console.log('Hooks componnet ngDoCheck called');
  }
  
}