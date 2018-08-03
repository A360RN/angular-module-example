import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsListComponent } from './components/posts-list/posts-list.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';

const routes: Routes = [
  { path: 'users/:userId', children: [
    { path: 'posts', component: PostsListComponent},
    { path: 'posts/:postId', children: [
      { path: 'comments', component: CommentsListComponent}
    ]}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRouterModule { }
