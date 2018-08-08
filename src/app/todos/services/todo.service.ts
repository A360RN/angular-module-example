import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodosByUserId(userId: number): Observable<Todo[]> {
    const url = `https://jsonplaceholder.typicode.com/user/${userId}/todos`;
    return this.http.get<Todo[]>(url);
  }
  
  getTodoById(todoId: number): Observable<Todo> {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    return this.http.get<Todo>(url);
  }

  addTodo(todo: Todo) {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const httpOptions = {
      headers: new HttpHeaders('Content-Type: application/json')
    };
    return this.http.post(url, todo, httpOptions);
  }

  updateTodo(todo: Todo) {
    const url = `https://jsonplaceholder.typicode.com/todos/${todo.id}`;
    const httpOptions = {
      headers: new HttpHeaders('Content-Type: application/json')
    };
    return this.http.patch(url, todo, httpOptions);
  }
}
