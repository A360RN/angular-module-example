import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

const routes: Routes = [
 { path: 'users/:userId', children: [
   { path: 'todos', component: TodosListComponent},
   { path: 'todos/add', component: TodoAddComponent},
   { path: 'todos/:todoId', children: [
     { path: 'edit', component: TodoEditComponent }
   ]}
 ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TodosRouterModule { }
