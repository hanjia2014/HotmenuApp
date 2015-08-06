IF NOT EXISTS(SELECT * FROM [INFORMATION_SCHEMA].[TABLES] WHERE[TABLE_SCHEMA] = N'dbo' AND[TABLE_NAME] = '__MigrationHistory' AND[TABLE_TYPE] = 'BASE TABLE')
    CREATE TABLE [dbo].[__MigrationHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ContextKey] nvarchar(300) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK_MigrationHistory] PRIMARY KEY ([MigrationId], [ContextKey])
    );
GO

CREATE TABLE [AspNetUsers] (
    [Id] nvarchar(450) NOT NULL,
    [AccessFailedCount] int NOT NULL,
    [ConcurrencyStamp] nvarchar(max),
    [Email] nvarchar(max),
    [EmailConfirmed] bit NOT NULL,
    [LockoutEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset,
    [NormalizedEmail] nvarchar(max),
    [NormalizedUserName] nvarchar(max),
    [PasswordHash] nvarchar(max),
    [PhoneNumber] nvarchar(max),
    [PhoneNumberConfirmed] bit NOT NULL,
    [SecurityStamp] nvarchar(max),
    [TwoFactorEnabled] bit NOT NULL,
    [UserName] nvarchar(max),
    CONSTRAINT [PK_ApplicationUser] PRIMARY KEY ([Id])
);
CREATE TABLE [AspNetRoles] (
    [Id] nvarchar(450) NOT NULL,
    [ConcurrencyStamp] nvarchar(max),
    [Name] nvarchar(max),
    [NormalizedName] nvarchar(max),
    CONSTRAINT [PK_IdentityRole] PRIMARY KEY ([Id])
);
CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [ClaimType] nvarchar(max),
    [ClaimValue] nvarchar(max),
    [UserId] nvarchar(450),
    CONSTRAINT [PK_IdentityUserClaim<string>] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_IdentityUserClaim<string>_ApplicationUser_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id])
);
CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max),
    [UserId] nvarchar(450),
    CONSTRAINT [PK_IdentityUserLogin<string>] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_IdentityUserLogin<string>_ApplicationUser_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id])
);
CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [ClaimType] nvarchar(max),
    [ClaimValue] nvarchar(max),
    [RoleId] nvarchar(450),
    CONSTRAINT [PK_IdentityRoleClaim<string>] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_IdentityRoleClaim<string>_IdentityRole_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id])
);
CREATE TABLE [AspNetUserRoles] (
    [UserId] nvarchar(450) NOT NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_IdentityUserRole<string>] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_IdentityUserRole<string>_IdentityRole_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]),
    CONSTRAINT [FK_IdentityUserRole<string>_ApplicationUser_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id])
);
INSERT INTO [dbo].[__MigrationHistory] ([MigrationId], [ContextKey], [ProductVersion])
VALUES ('20150805233150_applicationDbInit', 'HotmenuApp.Areas.Admin.Models.ApplicationDbContext', '7.0.0-beta5-13549');
;
GO

