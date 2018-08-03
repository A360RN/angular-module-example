import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo } from '../model/photo';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    return this.http.get<Photo[]>(url);
  }
}
