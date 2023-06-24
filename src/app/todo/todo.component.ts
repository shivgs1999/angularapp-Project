import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  subscription: Subscription;
  todoList:any = [];
  // inject the todo Service
  constructor(private todoServise: TodoService, private httpClient: HttpClient) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getTodos();
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title: 'Nikita'
    }

   this.subscription = this.todoServise.create(todo).subscribe(res => {
      console.log('todo Create', res);
      this.getTodos();
    })
  }

  getTodos(){
    this.subscription = this.todoServise.list().subscribe(res => {
     this.todoList = res;
     console.log('get todo list',this.todoList);
     
    }, error => {
      console.log(`error Occured`);    
    })
  }

  editTodo(todo:any){
    let data = {
      id: new Date().getTime(),
      title: 'edited Todo'
    }
    this.subscription = this.todoServise.update(todo.id, data).subscribe(res => {
      this.getTodos();
    }, err => {
      console.log(`error occured`);
      
    })
  }

  deleteTodo(id:any) {
    this.subscription = this.todoServise.delete(id).subscribe((res) => {
      this.getTodos();
    }, (error => {
      console.log(`error Occured`, error );
      
    }))
  }
}
