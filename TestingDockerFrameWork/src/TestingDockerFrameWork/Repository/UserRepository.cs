using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using TestingDockerFrameWork.Models;

namespace TestingDockerFrameWork.Repository
{
    public class UsersRepository
    {
    protected static IMongoClient _client;
    protected static IMongoDatabase _database;
    protected IMongoCollection<User> _collection;


    public UsersRepository()
    {
        _client = new MongoClient();
        _database = _client.GetDatabase("nohhtp");
        _collection = _database.GetCollection<User>("users");
    }

    public List<string> GetAll()
    {
        var query = _database.GetCollection<User>("users").Find(FilterDefinition<User>.Empty).ToList();
        return query.Select(u => u.Name).ToList();
    }
    }
}