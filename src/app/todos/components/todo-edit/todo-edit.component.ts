import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTodoById();
  }

  getTodoById() {
    const todoId = Number(this.route.snapshot.paramMap.get('todoId'));
    this.todoService.getTodoById(todoId).subscribe(todo => this.todo = todo);
  }

  updateTodo() {
    this.todoService.updateTodo(this.todo).subscribe(todo => console.log(todo));
  }
}
