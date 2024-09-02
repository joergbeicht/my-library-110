import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';  
import localeDe from '@angular/common/locales/de';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

registerLocaleData(localeDe);
@NgModule({
  declarations: [
    MyLibraryComponent,
    MyButtonComponent    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
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
