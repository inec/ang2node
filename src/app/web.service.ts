import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable} from '@angular/core';

export class WebService{
    constructor(private http:Http){}

    getMessages(){
           this.http.get('http://localhost:1234/').toPromise();
    }
}