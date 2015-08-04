using System;
using Microsoft.AspNet.SignalR;
using System.Threading;
using HotmenuApp.Models;

namespace HotmenuApp.Hub
{
    public class OrderHub : Hub<IOrderHub>
    {
        public void SubmitOrder()
        {
            bool dataProcessedSuccessfully = true;

            Thread.Sleep(1000);

            var responseString = "hello world " + DateTime.Now.ToLocalTime();

            if (dataProcessedSuccessfully)
            {
                Clients.All.UpdateOrderProcessStatus(responseString);
            }
            else
            {
                Clients.Caller.UpdateOrderProcessStatus(responseString);
            }
        }
    }

    public interface IOrderHub
    {
        void UpdateOrderProcessStatus(string order);
    }
}
