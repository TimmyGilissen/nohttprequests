import { Injectable } from '@angular/core';
import { ShoppingListItem } from './shopping-list-item'; 
import 'lodash';
declare var _;

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
  
  removeShoppingListItem(shoppingListItem: ShoppingListItem){
      _.remove(this.shoppingList, (shoppingListI) =>{
        return shoppingListI.id === shoppingListItem.id
      })
  }
  
  getShoppingList(): ShoppingListItem[] {
    return this.shoppingList;
  }

  InitShoppingList(items: Object[]) {
    this.shoppingList = [];
    for(let item in items){
        this.shoppingList.push(new ShoppingListItem(items[item]));
    }
  }
}
