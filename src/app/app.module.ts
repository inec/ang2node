import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages-component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule  ],
  declarations: [ AppComponent , MessagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
