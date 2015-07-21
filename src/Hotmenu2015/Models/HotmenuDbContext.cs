using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotmenuApp.Models
{
    public class HotmenuDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Foo> Foos { get; set; }
        public DbSet<Administrator> Administrators { get; set; }

        protected override void OnConfiguring(EntityOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=Hotmenu;Trusted_Connection=True;MultipleActiveResultSets=true;");
        }
    }
}
