using HotmenuApp.Models;
using Microsoft.Data.Entity.Metadata;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;

namespace HotmenuApp.Models
{
    [DataContract]
    public class Order
    {
        [Key]
        [DataMember]
        public Guid Id { get; set; }
        [DataMember]
        [Required]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd HH:mm}", ApplyFormatInEditMode = true)]
        public DateTime Time { get; set; }
        [DataMember]
        [JsonConverter(typeof(SingleValueArrayConverter<OrderItem>))]
        public List<OrderItem> Items { get; set; }
        [DataMember]
        public List<string> ClientNames { get; set; }
        [DataMember]
        public decimal Total
        {
            get
            {
                return Items == null || Items.Count == 0 ? 0 : Items.Sum(p => p.Price);
            }
        }
        [DataMember]
        public string Status { get; set; }
        [DataMember]
        public string Note { get; set; }
        [DataMember]
        public int TableNo { get; set; }
        public static Order ConvertJsonToOrder(JObject jOrder)
        {
            var order = new Order();
            var values = jOrder.Values().ToList();

            foreach(var value in values)
            {
                if(value.Path.Equals("Items", StringComparison.OrdinalIgnoreCase))
                {
                    order.Items = ConvertJsonToOrderItems(value);
                }
                if (value.Path.Equals("Id", StringComparison.OrdinalIgnoreCase))
                {
                    order.Id = new Guid(value.Value<JToken>("id").ToString());
                }
            }

            return order;
        }

        private static List<OrderItem> ConvertJsonToOrderItems(JToken items)
        {
            var orderItems = new List<OrderItem>();

            foreach(var item in items)
            {
                var clientName = item.Value<string>("ClientName");
                var orderId = new Guid(item.Value<JToken>("OrderId").Value<JToken>("id").ToString());
                var menuItemId = item.Value<int>("MenuItemId");
                var menuItemName = item.Value<string>("MenuItemName");
                var id = item.Value<int>("Id");
                var price = item.Value<decimal>("Price");

                orderItems.Add(new OrderItem {OrderId = orderId, ClientName = clientName, MenuItemId = menuItemId, MenuItemName = menuItemName, Price = price});
            }

            return orderItems;
        }
    }

    [DataContract]
    public class OrderItem
    {
        [DataMember]
        public Guid OrderId { get; set; }
        [DataMember]
        public int MenuItemId { get; set; }
        [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string MenuItemName { get; set; }
        [DataMember]
        public string ClientName { get; set; }
        [DataMember]
        public decimal Price { get; set; }
    }
}