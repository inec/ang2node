import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesComponent } from './messages-component';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { WebService }  from './web.service';

@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService]
})
export class AppModule { }
