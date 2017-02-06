using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;

namespace UserReadRepository
{
    public class UsersRepo.Repository
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;
        protected IMongoCollection<Users> _collection;


        public UsersRepo()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _database = _client.GetDatabase("nohhtp");
            _collection = _database.GetCollection<Users>("users");
        }

        public List<string> GetAll()
        {
            var query = _collection.Find(new BsonDocument()).ToListAsync();
            return query.Result.Select(u => u.name).ToList();
        }
    }

    public class Users
    {
        public string name { get; set; }
    }
}