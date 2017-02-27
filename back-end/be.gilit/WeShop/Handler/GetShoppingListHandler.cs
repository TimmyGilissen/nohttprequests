using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using PubNubMessaging.Core;
using WeShop.dto;
using WeShop.Models;
using WeShop.Repository;

namespace WeShop.Handler
{
    public class GetShoppingListHandler
    {
        private readonly Pubnub _pubnub;
        private readonly ShoppingListRepository _repo;

        public GetShoppingListHandler()
        {
             _repo = new ShoppingListRepository();
            _pubnub = new Pubnub("pub-c-81182831-bf67-42f1-8a0c-1cae468c5d6f", "sub-c-d7bd3004-a74c-11e6-b237-02ee2ddab7fe");
            _pubnub.Subscribe<string>(
                "GetShoppingList",
                DisplaySubscribeReturnMessage,
                x => {},
                y => {}
            );

            _pubnub.Subscribe<string>("AddNewShoppingListItem",AddNewShoppingListItem,x =>{}, y => {});
            _pubnub.Subscribe<string>("ShoppingListItemRemove",ShoppingListItemRemove, x => {}, y => {});
            _pubnub.Subscribe<string>("ToggleShoppingListItem",ToggleShoppingListItem, x => {}, y => {});

        }

        private void ToggleShoppingListItem(string message)
        {
            Console.WriteLine("ShoppingListItemRemove");
            List<object> deserializedMessage = _pubnub.JsonPluggableLibrary.DeserializeToListOfObject(message);
            var shoppingListItem = JsonConvert.DeserializeObject<ShoppingListItemDto>(deserializedMessage[0].ToString());

            var item = _repo.GetItem(shoppingListItem.id);
            item.complete = shoppingListItem.complete;

            _repo.Save(item);

            }

        private void ShoppingListItemRemove(string message)
        {
            Console.WriteLine("ShoppingListItemRemove");
            List<object> deserializedMessage = _pubnub.JsonPluggableLibrary.DeserializeToListOfObject(message);
            var shoppingListItem = JsonConvert.DeserializeObject<ShoppingListItemDto>(deserializedMessage[0].ToString());

            _repo.Delete(shoppingListItem.id);

            _pubnub.Publish<ShoppingListItem>("ShoppingListItemRemovedHandled", shoppingListItem, x => { }, y => { });
        }

        private void AddNewShoppingListItem(string message)
        {
            List<object> deserializedMessage = _pubnub.JsonPluggableLibrary.DeserializeToListOfObject(message);
            var shoppingListItem = JsonConvert.DeserializeObject<ShoppingListItem>(deserializedMessage[0].ToString());

            _repo.Add(shoppingListItem);
            Console.WriteLine(shoppingListItem);
            _pubnub.Publish<ShoppingListItem>("AddNewShoppingListItemHandled",shoppingListItem, x => {}, y => {});
        }

        private void DisplaySubscribeReturnMessage(string obj)
        {

            var list = _repo.GetAll();
            Console.WriteLine("message received");
            _pubnub.Publish<List<ShoppingListItem>>("GetShoppingListHandled", list,
                x => { },
                y => { }
            );
        }

        public void Dispose()
                {
                    _pubnub.Unsubscribe<string>("GetAllUsers",
                        DisplaySubscribeReturnMessage,
                        x => {},
                        x => {},
                        x => {}
                    );
                }
    }
}