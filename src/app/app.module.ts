import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonService, MyLibraryModule } from 'my-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryModule,
    BrowserAnimationsModule
  ],
  providers: [MyButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
