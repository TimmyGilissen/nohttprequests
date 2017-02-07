using System;
using System.Collections.Generic;
using PubNubMessaging.Core;
using WeShop.Models;

namespace WeShop.Handler
{
    public class GetShoppingListHandler
    {
        private readonly Pubnub _pubnub;

        public GetShoppingListHandler()
        {
            _pubnub = new Pubnub("pub-c-81182831-bf67-42f1-8a0c-1cae468c5d6f", "sub-c-d7bd3004-a74c-11e6-b237-02ee2ddab7fe");
            _pubnub.Subscribe<string>(
                "GetShoppingList",
                DisplaySubscribeReturnMessage,
                DisplaySubscribeConnectStatusMessage,
                DisplayErrorMessage
            );

        }

        private void DisplayErrorMessage(PubnubClientError obj)
        {
            Console.WriteLine("DisplayErrorMessage");
        }

        private void DisplaySubscribeConnectStatusMessage(string obj)
        {
           Console.WriteLine("DisplaySubscribeConnectStatusMessage");
        }

        private void DisplaySubscribeReturnMessage(string obj)
        {
            _pubnub.Publish<List<ShoppingListItem>>("GetAllUsersHandled", null,
                x => {},
                y => {}
            );
        }

        public void Dispose()
                {
                    _pubnub.Unsubscribe<string>("GetAllUsers",
                        DisplaySubscribeReturnMessage,
                        DisplaySubscribeConnectStatusMessage,
                        x => {},
                        DisplayErrorMessage
                    );
                }
    }
}