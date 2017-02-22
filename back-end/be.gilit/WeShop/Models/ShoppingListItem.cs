using MongoDB.Bson;

namespace WeShop.Models
{
    public class ShoppingListItem
    {
        public ObjectId id { get; set; }
        public string title { get; set; }
        public bool complete { get; set; }
    }
}