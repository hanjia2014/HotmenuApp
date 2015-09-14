using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;

namespace HotmenuApp.Models
{
    public class Order
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd HH:mm}", ApplyFormatInEditMode = true)]
        public DateTime Time { get; set; }
        public List<OrderItem> Items { get; set; }
        public List<string> ClientNames { get; set; }
        public decimal Total
        {
            get
            {
                return Items == null || Items.Count == 0 ? 0 : Items.Sum(p => p.Price);
            }
        }
        public string Status { get; set; }
        public string Note { get; set; }
        public int TableNo { get; set; }

        public Order(JObject jOrder)
        {
            var items = jOrder.SelectToken("Items");
            var id = jOrder.SelectToken("Id");
        }
    }

    public class OrderItem
    {
        public Guid OrderId { get; set; }
        public int MenuItemId { get; set; }
        public int Id { get; set; }
        public string MenuItemName { get; set; }
        public string ClientName { get; set; }
        public decimal Price { get; set; }
    }
}