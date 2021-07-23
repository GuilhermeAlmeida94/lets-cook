import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxTextPipe } from './pipes/max-text.pipe';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MaxTextPipe],
  exports: [
    MaxTextPipe,
    MaterialModule
  ]
})
export class SharedModule { }
