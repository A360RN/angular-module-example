import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  userId: number;
  todos: Todo[];

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTodosByUser();
  }

  getTodosByUser(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.todoService.getTodosByUserId(this.userId).subscribe(todos => this.todos = todos);
  }

  editTodo(todoId: number): void {
    this.router.navigate([`/users/${this.userId}/todos/${todoId}/edit`]);
  }

  addTodo(): void {
    this.router.navigate([`/users/${this.userId}/todos/add`]);
  }
}
