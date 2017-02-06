import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ShoppingListAppComponent } from '../app/shopping-list.component';

beforeEachProviders(() => [ShoppingListAppComponent]);

describe('App: ShoppingList', () => {
  it('should create the app',
      inject([ShoppingListAppComponent], (app: ShoppingListAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'shopping-list works!\'',
      inject([ShoppingListAppComponent], (app: ShoppingListAppComponent) => {
    expect(app.title).toEqual('shopping-list works!');
  }));
});
