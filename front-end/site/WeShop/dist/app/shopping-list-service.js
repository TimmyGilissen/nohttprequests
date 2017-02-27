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
var shopping_list_item_1 = require('./shopping-list-item');
require('lodash');
var ShoppingListService = (function () {
    function ShoppingListService() {
        this.lastId = 0;
        this.shoppingList = [];
    }
    ShoppingListService.prototype.addShoppingListItem = function (shoppingListItem) {
        if (!shoppingListItem.id) {
            shoppingListItem.id = ++this.lastId;
        }
        this.shoppingList.push(shoppingListItem);
        return this;
    };
    ShoppingListService.prototype.removeShoppingListItem = function (shoppingListItem) {
        _.remove(this.shoppingList, function (shoppingListI) {
            return shoppingListI.id === shoppingListItem.id;
        });
    };
    ShoppingListService.prototype.getShoppingList = function () {
        return this.shoppingList;
    };
    ShoppingListService.prototype.InitShoppingList = function (items) {
        this.shoppingList = [];
        for (var item in items) {
            this.shoppingList.push(new shopping_list_item_1.ShoppingListItem(items[item]));
        }
    };
    ShoppingListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list-service.js.map