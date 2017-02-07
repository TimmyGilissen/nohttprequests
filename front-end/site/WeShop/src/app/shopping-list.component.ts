import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list-service';
import { ShoppingListItem } from './shopping-list-item';
import { SubscriberService } from './subscriber.service';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  moduleId: module.id,
  selector: 'shopping-list-app',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
  providers: [ShoppingListService, SubscriberService, PubNubAngular]
})
export class ShoppingListAppComponent {
  title = 'shopping-list';

  newshoppingListItem: ShoppingListItem = new ShoppingListItem();

  constructor(private shoppingListService: ShoppingListService, private subscriberService: SubscriberService) {
    subscriberService.SubscribeToChannel("newShoppingListItem", (msg: any) => {
      this.shoppingListService.addShoppingListItem(new ShoppingListItem(msg.message));
    })
  }

  addShoppingList() {
    this.shoppingListService.addShoppingListItem(this.newshoppingListItem);
    this.newshoppingListItem = new ShoppingListItem();
  }
  doneClicked = () => {
      console.log('doneClicked');
  }
  clicked = () => {
    console.log('clicked');
  }

  get shoppingList() {
    return this.shoppingListService.getShoppingList();
  }
}
