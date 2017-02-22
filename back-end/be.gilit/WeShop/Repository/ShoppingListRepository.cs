using System.Collections.Generic;
using MongoDB.Bson;
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
            _client = new MongoClient("mongodb://localhost:27018");
            _database = _client.GetDatabase("weshop");
            _collection = _database.GetCollection<ShoppingListItem>("shoppinglist");
        }

        public List<ShoppingListItem> GetAll()
        {
            return _collection.Find(FilterDefinition<ShoppingListItem>.Empty).ToList();
        }

        public void Add(ShoppingListItem shoppingListItem)
        {
            _collection.InsertOne(shoppingListItem);
        }

        public void Delete(string shoppingListItemId)
        {
            _collection.DeleteOne(a => a.id == ObjectId.Parse(shoppingListItemId));
        }
    }
}