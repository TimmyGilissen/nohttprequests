using System;
using TestingDockerFrameWork.Handlers;

namespace TestingDockerFrameWork
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Register handlers");
            var handler = new GetAllUsersHandler();
            Console.WriteLine("press any key to stop the handlers");
            Console.ReadLine();
            Console.WriteLine("Unregister handlers");
            handler.Dispose();
        }
    }
}
