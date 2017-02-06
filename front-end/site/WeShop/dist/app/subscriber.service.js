"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pubnub_angular2_1 = require('pubnub-angular2');
var SubscriberService = (function () {
    function SubscriberService(pubnub) {
        var _this = this;
        this.pubnub = pubnub;
        this.SubscribeToChannel = function (channelName, callBack) {
            _this.pubnub.subscribe({ channels: [channelName], triggerEvents: true });
            _this.pubnub.getMessage(channelName, function (msg) {
                callBack(msg);
            });
        };
        pubnub.init({
            publishKey: 'pub-c-81182831-bf67-42f1-8a0c-1cae468c5d6f',
            subscribeKey: 'sub-c-d7bd3004-a74c-11e6-b237-02ee2ddab7fe'
        });
    }
    SubscriberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [pubnub_angular2_1.PubNubAngular])
    ], SubscriberService);
    return SubscriberService;
}());
exports.SubscriberService = SubscriberService;
//# sourceMappingURL=subscriber.service.js.map