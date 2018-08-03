import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlbumsRouterModule } from './albums-router.module';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { AlbumService } from './services/album.service';
import { PhotoService } from './services/photo.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AlbumsRouterModule
  ],
  declarations: [AlbumsListComponent, PhotosListComponent],
  providers: [ AlbumService, PhotoService ]
})
export class AlbumsModule { }
