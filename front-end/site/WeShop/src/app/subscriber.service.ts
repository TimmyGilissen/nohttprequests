import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';

@Injectable()
export class SubscriberService {

  constructor(private pubnub: PubNubAngular) {
    pubnub.init({
      publishKey: 'pub-c-81182831-bf67-42f1-8a0c-1cae468c5d6f',
      subscribeKey: 'sub-c-d7bd3004-a74c-11e6-b237-02ee2ddab7fe'
    });
  }

  SubscribeToChannel = (channelName:string, callBack: Function) => {
      this.pubnub.subscribe({channels: [channelName],triggerEvents: true});
      this.pubnub.getMessage(channelName,(msg) => {
        callBack(msg);
      });
  }

  PublishToChannel = (channelName:string, message:any) => {
    this.pubnub.publish({
        "message": message,
        "channel": channelName
    })
  }
}
