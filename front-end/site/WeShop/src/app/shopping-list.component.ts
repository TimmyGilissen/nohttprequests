import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list-service';
import { ShoppingListItem } from './shopping-list-item';
import { SubscriberService } from './subscriber.service';
import { PublisherService } from './publisher.service';
import { PubNubAngular } from 'pubnub-angular2';

@Component({
  moduleId: module.id,
  selector: 'shopping-list-app',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
  providers: [ShoppingListService, SubscriberService, PublisherService, PubNubAngular]
})
export class ShoppingListAppComponent {
  title = 'shopping-list';

  newshoppingListItem: ShoppingListItem = new ShoppingListItem();

  constructor(private shoppingListService: ShoppingListService, private subscriberService: SubscriberService, private publisherService: PublisherService) {
    subscriberService.SubscribeToChannel("newShoppingListItem", (msg: any) => {
      this.shoppingListService.addShoppingListItem(new ShoppingListItem(msg.message));
    })
    subscriberService.SubscribeToChannel("GetShoppingListHandled", (msg: any) => {
      this.shoppingListService.InitShoppingList(msg.message);
    })
    subscriberService.SubscribeToChannel("AddNewShoppingListItemHandled", (msg: any) => {
      this.shoppingListService.addShoppingListItem(new ShoppingListItem(msg.message));
      this.newshoppingListItem = new ShoppingListItem();
    });
    subscriberService.SubscribeToChannel("ShoppingListItemRemovedHandled", (msg: any) => {
      this.shoppingListService.removeShoppingListItem(new ShoppingListItem(msg.message));
    });
    subscriberService.PublishToChannel("GetShoppingList", "{}");
  }

  delete(shoppingListItem: ShoppingListItem) {
      this.subscriberService.PublishToChannel("ShoppingListItemRemove", shoppingListItem);
  }

  toggle(shoppingListItem: ShoppingListItem) {
    shoppingListItem.complete != shoppingListItem.complete;
  }

  addShoppingList() {
    this.subscriberService.PublishToChannel("AddNewShoppingListItem", this.newshoppingListItem);
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