import { NgModule } from '@angular/core';
import { AlbumsRouterModule } from './albums-router.module';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

@NgModule({
  imports: [
    AlbumsRouterModule
  ],
  exports: [
    AlbumsRouterModule
  ],
  declarations: [AlbumsListComponent, PhotosListComponent]
})
export class AlbumsModule { }
