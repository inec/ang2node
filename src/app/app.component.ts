import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hi Monde {{name}}</h1>`,
})
export class AppComponent  { name = 'World'; }
