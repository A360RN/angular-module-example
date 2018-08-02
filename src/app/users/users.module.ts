import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersRouterModule } from './users-router.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRouterModule
  ],
  exports: [
    UsersRouterModule
  ],
  declarations: [UsersListComponent],
  providers: [UserService]
})
export class UsersModule { }
