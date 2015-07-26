using System;
using Microsoft.AspNet.SignalR;
namespace HotmenuApp.Hub
{
    public class OrderHub : Hub<IOrderHub>
    {
        public void Send(string name, string message)
        {
            Clients.All.AddNewMessageToPage(name, message);
        }
    }

    public interface IOrderHub
    {
        void AddNewMessageToPage(string key, string value);
    }
}
