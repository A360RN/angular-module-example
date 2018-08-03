import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../model/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsByUserId(userId: number): Observable<Post[]> {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.http.get<Post[]>(url);
  }
}
