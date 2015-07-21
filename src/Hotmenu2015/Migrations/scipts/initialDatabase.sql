IF NOT EXISTS(SELECT * FROM [INFORMATION_SCHEMA].[TABLES] WHERE[TABLE_SCHEMA] = N'dbo' AND[TABLE_NAME] = '__MigrationHistory' AND[TABLE_TYPE] = 'BASE TABLE')
    CREATE TABLE [dbo].[__MigrationHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ContextKey] nvarchar(300) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK_MigrationHistory] PRIMARY KEY ([MigrationId], [ContextKey])
    );
GO

CREATE SEQUENCE [DefaultSequence] AS bigint START WITH 1 INCREMENT BY 10 NO MINVALUE NO MAXVALUE NO CYCLE;
CREATE TABLE [Administrator] (
    [Id] int NOT NULL,
    [Password] nvarchar(max),
    [Username] nvarchar(max),
    CONSTRAINT [PK_Administrator] PRIMARY KEY ([Id])
);
CREATE TABLE [Category] (
    [Id] int NOT NULL,
    [Name] nvarchar(max),
    CONSTRAINT [PK_Category] PRIMARY KEY ([Id])
);
CREATE TABLE [MenuItem] (
    [CategoryId] int NOT NULL,
    [Description] nvarchar(max),
    [Id] int NOT NULL,
    [Image] varbinary(max),
    [Name] nvarchar(max),
    [Price] decimal(18, 2) NOT NULL,
    CONSTRAINT [PK_MenuItem] PRIMARY KEY ([Id])
);
CREATE TABLE [Order] (
    [Id] uniqueidentifier NOT NULL,
    [Note] nvarchar(max),
    [Status] nvarchar(max),
    [TableNo] int NOT NULL,
    [Time] datetime2 NOT NULL,
    CONSTRAINT [PK_Order] PRIMARY KEY ([Id])
);
CREATE TABLE [OrderItem] (
    [Id] int NOT NULL,
    [MenuItemId] int NOT NULL,
    [MenuItemName] nvarchar(max),
    [OrderId] uniqueidentifier NOT NULL,
    [Price] decimal(18, 2) NOT NULL,
    CONSTRAINT [PK_OrderItem] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OrderItem_Order_OrderId] FOREIGN KEY ([OrderId]) REFERENCES [Order] ([Id])
);
INSERT INTO [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [ProductVersion])
VALUES ('20150713033241_InitialDatabase', 'HotmenuApp.Models.HotmenuDbContext', '7.0.0-beta4-12943');
;
GO

