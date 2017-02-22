import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Injectable()
export class PublisherService {

  constructor(private pubnub: PubNubAngular) {
  
  }

  PublishToChannel = (channelName:string, message:any) => {
  
  }

}
