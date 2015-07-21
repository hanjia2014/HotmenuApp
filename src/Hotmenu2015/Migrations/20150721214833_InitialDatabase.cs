using System.Collections.Generic;
using Microsoft.Data.Entity.Relational.Migrations;
using Microsoft.Data.Entity.Relational.Migrations.Builders;
using Microsoft.Data.Entity.Relational.Migrations.Operations;

namespace Hotmenu2015.Migrations
{
    public partial class InitialDatabase : Migration
    {
        public override void Up(MigrationBuilder migration)
        {
            migration.CreateSequence(
                name: "DefaultSequence",
                type: "bigint",
                startWith: 1L,
                incrementBy: 10);
            migration.CreateTable(
                name: "Administrator",
                columns: table => new
                {
                    Id = table.Column(type: "int", nullable: false),
                    Password = table.Column(type: "nvarchar(max)", nullable: true),
                    Username = table.Column(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Administrator", x => x.Id);
                });
            migration.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column(type: "int", nullable: false),
                    Name = table.Column(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });
            migration.CreateTable(
                name: "Foo",
                columns: table => new
                {
                    Id = table.Column(type: "int", nullable: false),
                    Name = table.Column(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Foo", x => x.Id);
                });
            migration.CreateTable(
                name: "MenuItem",
                columns: table => new
                {
                    Id = table.Column(type: "int", nullable: false),
                    CategoryId = table.Column(type: "int", nullable: false),
                    Description = table.Column(type: "nvarchar(max)", nullable: true),
                    Image = table.Column(type: "varbinary(max)", nullable: true),
                    Name = table.Column(type: "nvarchar(max)", nullable: true),
                    Price = table.Column(type: "decimal(18, 2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItem", x => x.Id);
                });
            migration.CreateTable(
                name: "Order",
                columns: table => new
                {
                    Id = table.Column(type: "uniqueidentifier", nullable: false),
                    Note = table.Column(type: "nvarchar(max)", nullable: true),
                    Status = table.Column(type: "nvarchar(max)", nullable: true),
                    TableNo = table.Column(type: "int", nullable: false),
                    Time = table.Column(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Id);
                });
            migration.CreateTable(
                name: "OrderItem",
                columns: table => new
                {
                    Id = table.Column(type: "int", nullable: false),
                    ClientName = table.Column(type: "nvarchar(max)", nullable: true),
                    MenuItemId = table.Column(type: "int", nullable: false),
                    MenuItemName = table.Column(type: "nvarchar(max)", nullable: true),
                    OrderId = table.Column(type: "uniqueidentifier", nullable: false),
                    Price = table.Column(type: "decimal(18, 2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItem_Order_OrderId",
                        columns: x => x.OrderId,
                        referencedTable: "Order",
                        referencedColumn: "Id");
                });
        }
        
        public override void Down(MigrationBuilder migration)
        {
            migration.DropSequence("DefaultSequence");
            migration.DropTable("Administrator");
            migration.DropTable("Category");
            migration.DropTable("Foo");
            migration.DropTable("MenuItem");
            migration.DropTable("Order");
            migration.DropTable("OrderItem");
        }
    }
}
