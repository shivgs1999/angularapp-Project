import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() parentData : string;
  @ContentChild("child", {static: false}) contentChild: ElementRef;
  @ViewChild("childhook",  {static: false}) viewChild: ElementRef;
  temp: any [] = [] ;
  counter;
  num;
  constructor(private postService: PostService) {
    console.log('Hooks componnet constructor called', this.parentData);
   }

  ngAfterViewChecked(): void {
    console.log('HooksComponent ngAfterViewChecked called');
    this.viewChild.nativeElement.setAttribute('style', `color:${this.parentData}`)
  }
  ngAfterViewInit(): void {
    console.log('HooksComponent ngAfterViewInit called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color:${this.parentData}`)
  }

  ngAfterContentChecked(): void {
    console.log('HooksComponent ngAfterContentChecked called');
    this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`)
  }

   ngAfterContentInit(): void {
    console.log('HooksComponent ngAfterContentInit called', this.contentChild);
    //console.log('trying to get view child in content init', this.viewChild);
   //
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

  // this.counter = setInterval(() => {
  //   this.num = this.num + 1;
  //   console.log(this.num);
  // }, 1000)
  }
  ngDoCheck(): void {
    console.log('HooksComponent ngDoCheck called.')
    
    // 
   }

   ngOnDestroy(): void {
    console.log('HooksComponent ngOnDestroy called');
    clearInterval(this.counter);
   }
  

}