import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Album } from '../model/album';

@Injectable()
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbumsByUserId(userId: number): Observable<Album[]> {
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    return this.http.get<Album[]>(url);
  }
}
