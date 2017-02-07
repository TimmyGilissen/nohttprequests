using MongoDB.Bson;

namespace WeShop.Models
{
    public class ShoppingListItem
    {
        public ObjectId Id { get; set; }
        public string Title { get; set; }
        public bool Completed { get; set; }

    }
}