using System;

namespace HotmenuApp.Hub
{
    public class OrderHub : Microsoft.AspNet.SignalR.Hub<IOrderHub>
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
