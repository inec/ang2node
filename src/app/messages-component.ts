import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: 'test<div *ngFor="let message of messages">            {{message.text}} by {{message.owner}}        </div>'
   
       
})
export class MessagesComponent {
    messages = [{text:'some tesxt', owner: 'CHIchi'},{text:'some stesxt', owner: ' C2cdhi'}];

}