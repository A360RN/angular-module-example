import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class SharedModule { }
