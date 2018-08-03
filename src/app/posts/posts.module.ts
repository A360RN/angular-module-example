import { NgModule } from '@angular/core';
import { PostsRouterModule } from './posts-router.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';

@NgModule({
  imports: [
    PostsRouterModule
  ],
  exports: [
    PostsRouterModule
  ],
  declarations: [PostsListComponent, CommentsListComponent],
  providers: [ PostService, CommentService ]
})
export class PostsModule { }
