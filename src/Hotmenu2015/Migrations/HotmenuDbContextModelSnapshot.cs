using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Relational.Migrations.Infrastructure;
using HotmenuApp.Models;

namespace Hotmenu2015.Migrations
{
    [ContextType(typeof(HotmenuDbContext))]
    partial class HotmenuDbContextModelSnapshot : ModelSnapshot
    {
        public override void BuildModel(ModelBuilder builder)
        {
            builder
                .Annotation("SqlServer:DefaultSequenceName", "DefaultSequence")
                .Annotation("SqlServer:Sequence:.DefaultSequence", "'DefaultSequence', '', '1', '10', '', '', 'Int64', 'False'")
                .Annotation("SqlServer:ValueGeneration", "Sequence");
            
            builder.Entity("HotmenuApp.Models.Administrator", b =>
                {
                    b.Property<int>("Id")
                        .GenerateValueOnAdd()
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity);
                    
                    b.Property<string>("Password");
                    
                    b.Property<string>("Username");
                    
                    b.Key("Id");
                });
            
            builder.Entity("HotmenuApp.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .GenerateValueOnAdd()
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity);
                    
                    b.Property<string>("Name");
                    
                    b.Key("Id");
                });
            
            builder.Entity("HotmenuApp.Models.Foo", b =>
                {
                    b.Property<int>("Id")
                        .GenerateValueOnAdd()
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity);
                    
                    b.Property<string>("Name");
                    
                    b.Key("Id");
                });
            
            builder.Entity("HotmenuApp.Models.MenuItem", b =>
                {
                    b.Property<int>("Id")
                        .GenerateValueOnAdd()
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity);
                    
                    b.Property<int>("CategoryId");
                    
                    b.Property<string>("Description");
                    
                    b.Property<byte[]>("Image");
                    
                    b.Property<string>("Name");
                    
                    b.Property<decimal>("Price");
                    
                    b.Key("Id");
                });
            
            builder.Entity("HotmenuApp.Models.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .GenerateValueOnAdd();
                    
                    b.Property<string>("Note");
                    
                    b.Property<string>("Status");
                    
                    b.Property<int>("TableNo");
                    
                    b.Property<DateTime>("Time");
                    
                    b.Key("Id");
                });
            
            builder.Entity("HotmenuApp.Models.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .GenerateValueOnAdd()
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity);
                    
                    b.Property<string>("ClientName");
                    
                    b.Property<int>("MenuItemId");
                    
                    b.Property<string>("MenuItemName");
                    
                    b.Property<Guid>("OrderId");
                    
                    b.Property<decimal>("Price");
                    
                    b.Key("Id");
                });
            
            builder.Entity("HotmenuApp.Models.OrderItem", b =>
                {
                    b.Reference("HotmenuApp.Models.Order")
                        .InverseCollection()
                        .ForeignKey("OrderId");
                });
        }
    }
}
