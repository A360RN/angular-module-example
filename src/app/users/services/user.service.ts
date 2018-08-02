import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }
}
