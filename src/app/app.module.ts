import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonService, MyLibraryModule } from 'my-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { DsHeaderModule } from 'projects/ds-header/src/public-api';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MyLibraryModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DsHeaderModule,
    MaterialModule
  ],
  providers: [MyButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
