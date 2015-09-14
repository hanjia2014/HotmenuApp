using System;
using Microsoft.AspNet.SignalR;
using System.Threading;
using HotmenuApp.Models;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace HotmenuApp.Hub
{
    public class OrderHub : Hub<IOrderHub>
    {
        public void SubmitOrder(JObject order)
        {
            bool dataProcessedSuccessfully = true;
            
            var submittedOrder = new Order(order);

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
