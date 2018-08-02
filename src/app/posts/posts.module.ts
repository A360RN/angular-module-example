import { NgModule } from '@angular/core';
import { PostsRouterModule } from './posts-router.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

@NgModule({
  imports: [
    PostsRouterModule
  ],
  exports: [
    PostsRouterModule
  ],
  declarations: [PostsListComponent, CommentsListComponent]
})
export class PostsModule { }
