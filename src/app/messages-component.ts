import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: 'this is the messages component based Twg {{messages.length}}'
})
export class MessagesComponent {
    messages = [{text:'some tesxt', owner: 'chi'},{text:'some stesxt', owner: 'cdhi'}];

}