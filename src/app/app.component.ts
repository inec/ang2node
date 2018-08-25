import { Component } from '@angular/core';


@Component({
  selector: 'pg-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent  { 
  // name = 'World';
  myProp:string = 'Go ahead, click that button';
 myMethod(){
   this.myProp= 'that button above me was clicked';
   console.log("my test");
 }
}
