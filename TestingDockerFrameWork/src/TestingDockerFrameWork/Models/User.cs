using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TestingDockerFrameWork.Models
{
    public class User
    {
        [BsonElement("_id")]
        public ObjectId Id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
    }
}