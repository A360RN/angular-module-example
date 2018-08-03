import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Album } from '../../model/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums: Album[];
  userId: number;

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAlbumsByUser();
  }

  getAlbumsByUser(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.albumService.getAlbumsByUserId(this.userId).subscribe(albums => this.albums = albums);
  }

  getPhotosByAlbum(albumId: number): void {
    this.router.navigate([`/users/${this.userId}/albums/${albumId}/photos`]);
  }
}
