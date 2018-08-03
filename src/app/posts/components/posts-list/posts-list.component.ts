import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from '../../services/post.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];
  userId: number;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPostsByUserId();
  }

  getPostsByUserId() {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.postService.getPostsByUserId(this.userId).subscribe(posts => this.posts = posts);
  }

  getCommentsByPost(postId: number) {
    this.router.navigate([`/users/${this.userId}/posts/${postId}/comments`]);
  }
}
