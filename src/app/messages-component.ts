import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: 'this is the messages component based Twg {{messages[0].owner}}'
})
export class MessagesComponent {
    messages = [{text:'some tesxt', owner: 'CHIchi'},{text:'some stesxt', owner: 'cdhi'}];

}