import { Component } from '@angular/core';
import { MessagesComponent } from './messages-component';
@Component({
  selector: 'my-app',
  template: `<h1>Hi Monde  w {{name}}</h1> <messages></messages>`,
})
export class AppComponent  { name = 'World'; }
