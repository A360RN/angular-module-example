import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Photo } from '../../model/photo';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[];

  constructor(private photoService: PhotoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPhotosByAlbum();
  }

  getPhotosByAlbum(): void {
    const albumId = this.route.snapshot.paramMap.get('albumId');
    this.photoService.getPhotosByAlbumId(albumId).subscribe(photos => this.photos = photos);
  }
}
