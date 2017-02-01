using System;
using System.Collections.Generic;
using PubNubMessaging.Core;

namespace TestingDockerFrameWork.Handlers
{
    public class GetAllUsersHandler
    {
        private readonly Pubnub _pubnub;
        public GetAllUsersHandler()
        {
            _pubnub = new Pubnub("pub-c-81182831-bf67-42f1-8a0c-1cae468c5d6f", "sub-c-d7bd3004-a74c-11e6-b237-02ee2ddab7fe");
            _pubnub.Subscribe<string>(
                "GetAllUsers",
                DisplaySubscribeReturnMessage,
                DisplaySubscribeConnectStatusMessage,
                DisplayErrorMessage
            );
        }

        void DisplayReturnMessage(List<User> result)
        {
            Console.WriteLine("PUBLISH STATUS CALLBACK");
            Console.WriteLine(result);
        }
        void DisplaySubscribeReturnMessage(string result)
        {
            _pubnub.Publish<List<User>>("GetAllUsersHandled", new List<User> {new User {Id = 1, Name = "Timmy Gilissen"} }, 
                DisplayReturnMessage,
                DisplayErrorMessage
            );
        }
        void DisplaySubscribeConnectStatusMessage(string result)
        {
            Console.WriteLine("SUBSCRIBE CONNECT CALLBACK");
        }
        void DisplayErrorMessage(PubnubClientError pubnubError)
        {
            Console.WriteLine(pubnubError.StatusCode);
        }

        public void Dispose()
        {
            _pubnub.Unsubscribe<string>("GetAllUsers",
                DisplaySubscribeReturnMessage,
                DisplaySubscribeConnectStatusMessage,
                DisplaySubscribeDisconnectStatusMessage,
                DisplayErrorMessage
            );
        }

        private void DisplaySubscribeDisconnectStatusMessage(string obj)
        {
            Console.WriteLine("DisplaySubscribeDisconnectStatusMessage");
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
