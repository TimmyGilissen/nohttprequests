import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {ShoppingListItem} from './shopping-list-item';

describe('ShoppingListItem', () => {
  it('should create an instance', () => {
    expect(new ShoppingListItem()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let shoppingListItem = new ShoppingListItem({
      title: 'hello',
      complete: true
    });
    expect(shoppingListItem.title).toEqual('hello');
    expect(shoppingListItem.complete).toEqual(true);
  });
});
