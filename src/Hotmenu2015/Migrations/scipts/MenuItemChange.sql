IF NOT EXISTS(SELECT * FROM [INFORMATION_SCHEMA].[TABLES] WHERE[TABLE_SCHEMA] = N'dbo' AND[TABLE_NAME] = '__MigrationHistory' AND[TABLE_TYPE] = 'BASE TABLE')
    CREATE TABLE [dbo].[__MigrationHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ContextKey] nvarchar(300) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK_MigrationHistory] PRIMARY KEY ([MigrationId], [ContextKey])
    );
GO

ALTER TABLE [OrderItem] ADD [ClientName] nvarchar(max);
INSERT INTO [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [ProductVersion])
VALUES ('20150716032134_MenuItemChange', 'HotmenuApp.Models.HotmenuDbContext', '7.0.0-beta4-12943');
;
GO

