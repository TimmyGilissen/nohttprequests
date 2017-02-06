"use strict";
var ShoppingListItem = (function () {
    function ShoppingListItem(values) {
        if (values === void 0) { values = {}; }
        this.title = '';
        this.complete = false;
        Object.assign(this, values);
    }
    return ShoppingListItem;
}());
exports.ShoppingListItem = ShoppingListItem;
//# sourceMappingURL=shopping-list-item.js.map