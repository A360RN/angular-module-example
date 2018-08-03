import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';

const routes: Routes = [
  { path: 'users/:userId', children: [
    { path: 'albums', component: AlbumsListComponent },
    { path: 'albums/:albumId', children: [
      { path: 'photos', component: PhotosListComponent }
    ]}
  ]}
];

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AlbumsRouterModule { }
