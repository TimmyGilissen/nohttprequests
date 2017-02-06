"use strict";
var testing_1 = require('@angular/core/testing');
var shopping_list_component_1 = require('../app/shopping-list.component');
testing_1.beforeEachProviders(function () { return [shopping_list_component_1.ShoppingListAppComponent]; });
testing_1.describe('App: ShoppingList', function () {
    testing_1.it('should create the app', testing_1.inject([shopping_list_component_1.ShoppingListAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'shopping-list works!\'', testing_1.inject([shopping_list_component_1.ShoppingListAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('shopping-list works!');
    }));
});
//# sourceMappingURL=shopping-list.component.spec.js.map