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
var shopping_list_service_1 = require('./shopping-list-service');
var shopping_list_item_1 = require('./shopping-list-item');
var subscriber_service_1 = require('./subscriber.service');
var pubnub_angular2_1 = require('pubnub-angular2');
var ShoppingListAppComponent = (function () {
    function ShoppingListAppComponent(shoppingListService, subscriberService) {
        var _this = this;
        this.shoppingListService = shoppingListService;
        this.subscriberService = subscriberService;
        this.title = 'shopping-list';
        this.newshoppingListItem = new shopping_list_item_1.ShoppingListItem();
        this.doneClicked = function () {
            console.log('doneClicked');
        };
        this.clicked = function () {
            console.log('clicked');
        };
        subscriberService.SubscribeToChannel("newShoppingListItem", function (msg) {
            _this.shoppingListService.addShoppingListItem(new shopping_list_item_1.ShoppingListItem(msg.message));
        });
    }
    ShoppingListAppComponent.prototype.addShoppingList = function () {
        this.shoppingListService.addShoppingListItem(this.newshoppingListItem);
        this.newshoppingListItem = new shopping_list_item_1.ShoppingListItem();
    };
    Object.defineProperty(ShoppingListAppComponent.prototype, "shoppingList", {
        get: function () {
            return this.shoppingListService.getShoppingList();
        },
        enumerable: true,
        configurable: true
    });
    ShoppingListAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shopping-list-app',
            templateUrl: 'shopping-list.component.html',
            styleUrls: ['shopping-list.component.css'],
            providers: [shopping_list_service_1.ShoppingListService, subscriber_service_1.SubscriberService, pubnub_angular2_1.PubNubAngular]
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, subscriber_service_1.SubscriberService])
    ], ShoppingListAppComponent);
    return ShoppingListAppComponent;
}());
exports.ShoppingListAppComponent = ShoppingListAppComponent;
//# sourceMappingURL=shopping-list.component.js.map