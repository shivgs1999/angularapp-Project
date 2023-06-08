import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/posts';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  arrPerticularObj = [];
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
   let id = this.route.snapshot.params['id'];
    this.postService.GetPostById(id).subscribe(res => {
     // console.log('data from post details', res)
      this.arrPerticularObj = [res];
      console.log('data from post details', this.arrPerticularObj)
    })
  }

}