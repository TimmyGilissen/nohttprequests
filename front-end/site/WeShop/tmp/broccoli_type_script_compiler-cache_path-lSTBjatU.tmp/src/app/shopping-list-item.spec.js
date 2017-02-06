"use strict";
var testing_1 = require('@angular/core/testing');
var shopping_list_item_1 = require('./shopping-list-item');
testing_1.describe('ShoppingListItem', function () {
    testing_1.it('should create an instance', function () {
        testing_1.expect(new shopping_list_item_1.ShoppingListItem()).toBeTruthy();
    });
    testing_1.it('should accept values in the constructor', function () {
        var shoppingListItem = new shopping_list_item_1.ShoppingListItem({
            title: 'hello',
            complete: true
        });
        testing_1.expect(shoppingListItem.title).toEqual('hello');
        testing_1.expect(shoppingListItem.complete).toEqual(true);
    });
});
//# sourceMappingURL=shopping-list-item.spec.js.map