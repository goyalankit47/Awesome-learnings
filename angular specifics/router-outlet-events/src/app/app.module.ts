import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompo1Component } from './child-compo1/child-compo1.component';
import { ChildCompo2Component } from './child-compo2/child-compo2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompo1Component,
    ChildCompo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
