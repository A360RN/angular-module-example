import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Comment } from '../../model/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCommentsByPost();
  }

  getCommentsByPost() {
    const postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.commentService.getCommentsByPost(postId).subscribe(comments => this.comments = comments);
  }
}
