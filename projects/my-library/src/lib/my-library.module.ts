import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';  
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);
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
  ],
  providers: [
    DatePipe
  ]
})
export class MyLibraryModule { }
