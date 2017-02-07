using System.Collections.Generic;
using MongoDB.Driver;
using WeShop.Models;

namespace WeShop.Repository
{
    public class ShoppingListRepository
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;
        protected IMongoCollection<ShoppingListItem> _collection;

        public ShoppingListRepository()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _database = _client.GetDatabase("weshop");
            _collection = _database.GetCollection<ShoppingListItem>("shoppinglist");
        }

        public List<ShoppingListItem> GetAll()
        {
            return _database.GetCollection<ShoppingListItem>("shoppinglist").Find(FilterDefinition<ShoppingListItem>.Empty).ToList();
        }
    }
}