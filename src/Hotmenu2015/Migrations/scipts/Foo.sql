CREATE TABLE [Foo] (
    [Id] int NOT NULL,
    [Name] nvarchar(max),
    CONSTRAINT [PK_Foo] PRIMARY KEY ([Id])
);
INSERT INTO [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [ProductVersion])
VALUES ('20150713035422_Foo', 'HotmenuApp.Models.HotmenuDbContext', '7.0.0-beta4-12943');
;
GO

