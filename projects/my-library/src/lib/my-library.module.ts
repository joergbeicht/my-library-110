import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    MyLibraryComponent,
    MyButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibraryComponent,
    MyButtonComponent
  ]
})
export class MyLibraryModule { }
