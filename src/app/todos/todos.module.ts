import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TodosRouterModule } from './/todos-router.module';

import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component'; 

import { TodoService } from './services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TodosRouterModule
  ],
  declarations: [ TodosListComponent, TodoAddComponent, TodoEditComponent ],
  providers: [ TodoService ]
})
export class TodosModule { }
