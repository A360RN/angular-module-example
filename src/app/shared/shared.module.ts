import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  declarations: []
})
export class SharedModule { }
