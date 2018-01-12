import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Message } from './message';
import { ConsumerService } from './consumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css']
})
export class PresenterComponent implements OnInit { 
    messages: Message[];

    constructor(
      private consumerService: ConsumerService
    ) { }

    ngOnInit() {
      this.getMessages();
      this.removeMessage();
    }

    //Get messages
    getMessages(): void {
      this.consumerService.getMessages()
        .subscribe(messages => {
          let now = Date.now();
          this.messages = messages.filter(message => (new Date(message.expiration_date).getTime()) >= now);
          for (let message of this.messages) {
            message.message = 'data:image/jpg;base64,' + message.message;
          }
        });
    }

    //Tracking time to remove message exprire
    removeMessage(): void{
      setInterval(() => {
        let now = Date.now();
        this.messages = this.messages.filter(message => (new Date(message.expiration_date).getTime()) >= now);
      }, 1000);
      
    }
}
