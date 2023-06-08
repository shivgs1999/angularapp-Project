import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // 4). inject the post Servise inside the constructor
  constructor(private postService: PostService) { }

  arrayOfObject: any = []
  arrayObj:any = []
  ngOnInit(): void {
    // 5).  get All values from Array Of Object, Json File
    this.postService.GetAllPosts().subscribe(res => {
      // console.log(`get all post`, res); 
      this.arrayOfObject = res;
      console.log(this.arrayOfObject);
    })

    // get Post By id 
    this.postService.GetPostById(87).subscribe(res => {
      // console.log(`get post by Id`, res);
      this.arrayObj = res;
      console.log(this.arrayObj);   
    })
    //Update post By Id
    this.updatePost();

    // to call delete Method
    this.deletePostById();

    // to call delete Method
    this.createPost();
  }
  updatePost() {
    let data = {
      id: new Date().getTime(),
      title: 'This is updated title'
    }

    this.postService.UpdatePostById(1, data).subscribe(res => {
      //console.log('data updated successfully', res);
    })
  } 

  deletePostById() {
    this.postService.DeletePostById(1).subscribe(res => {
     // console.log('post deleted successfully', res);
    })
  }

  createPost() {
    let body = {
      id: new Date().getTime(),
      title: 'This is new post',
      body: 'This is the test post method of httpclient'
    }
    this.postService.CreatePost(body).subscribe(res => {
     // console.log('Poste created successfully', res);
    })
  }

  
}
