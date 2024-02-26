import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonService, MyLibraryModule } from 'my-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryModule
  ],
  providers: [MyButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
