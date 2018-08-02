import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AlbumsModule } from './albums/albums.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    PostsModule,
    AlbumsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
