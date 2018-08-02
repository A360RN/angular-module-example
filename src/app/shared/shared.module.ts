import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class SharedModule { }
