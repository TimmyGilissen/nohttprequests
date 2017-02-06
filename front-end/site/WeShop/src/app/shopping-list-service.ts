import { Injectable } from '@angular/core';
import { ShoppingListItem } from './shopping-list-item';

@Injectable()
export class ShoppingListService {

  lastId = 0;
  shoppingList: ShoppingListItem[] = [];

  constructor() { }

  addShoppingListItem(shoppingListItem: ShoppingListItem): ShoppingListService {
    if (!shoppingListItem.id) { shoppingListItem.id = ++this.lastId }

    this.shoppingList.push(shoppingListItem);
    return this;
  }

  getShoppingList(): ShoppingListItem[] {
    return this.shoppingList;
  }
}
