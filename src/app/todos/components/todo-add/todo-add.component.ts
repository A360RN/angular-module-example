import { Component, OnInit } from '@angular/core';

import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoTitle: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {

  }

  addTodo(): void {
    const todo = { id: 0, title: this.todoTitle, completed: false };
    this.todoService.addTodo(todo).subscribe(todo => console.log(todo));
  }
}
