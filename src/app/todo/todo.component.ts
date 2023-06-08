import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList:any = [];
  // inject the todo Service
  constructor(private todoServise: TodoService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getTodos();
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      title: 'Nikita'
    }

    this.todoServise.create(todo).subscribe(res => {
      console.log('todo Create', res);
      this.getTodos();
    })
  }

  getTodos(){
    this.todoServise.list().subscribe(res => {
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
    this.todoServise.update(todo.id, data).subscribe(res => {
      this.getTodos();
    }, err => {
      console.log(`error occured`);
      
    })
  }

  deleteTodo(id:any) {
    this.todoServise.delete(id).subscribe((res) => {
      this.getTodos();
    }, (error => {
      console.log(`error Occured`, error );
      
    }))
  }
}
