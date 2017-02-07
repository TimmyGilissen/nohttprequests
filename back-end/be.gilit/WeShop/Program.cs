using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeShop.Handler;

namespace WeShop
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Register handlers");
            var handler = new GetShoppingListHandler();
            Console.WriteLine("press any key to stop the handlers");
            Console.ReadLine();
            Console.WriteLine("Unregister handlers");
            handler.Dispose();
        }
    }
}