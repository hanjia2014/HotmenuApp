USE [Hotmenu]
GO

INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (1, 'ENTREES')
INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (2, 'MAINS')
INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (3, 'VEGETARIAN')
INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (4, 'KIWI KIDS')
INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (5, 'DESSERTS')
INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (6, 'LUNCHES')
INSERT INTO [dbo].[Category]([Id],[Name]) VALUES (7, 'DRINKS')
GO


INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (1,'A light, white, oven-baked loaf w herb & garlic or plain butter.',1,'LONE STAR LOAF',10)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (1,'Spicy red kidney beans, cheddar cheese, sundried tomatoes, jalapenos, garlic and onions. Blended and served hot w sour cream and baked tortilla chips.',2,'Judge Roy Bean Dip',11)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (2,'Oven-baked chicken breast, Cos lettuce, parmesan cheese, garlic croutons and streaky bacon, tossed in L.S. Caesar style dressing. Topped w a poached egg. Anchovies optional.',3,'COMANCHE CHICKEN SALAD',25)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (2,'Breast(s) of chicken poached in a creamy sauce of white wine, garlic, spring onion, fresh herbs, corn & carrot w buffalo chips & the L.S. coleslaw....... ‘World famous all around New Zealand’.',4,'Dixie Chicken™ (Medium)',30)

INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (3,'Roasted seasonal vegetables w spicy bean mix on crispy corn chips. Grilled w cheese & topped w sour cream & salsa.',5,'BUENOS NACHOS',17)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (3,'Rolled flour tortilla filled with seasonal roasted veges, spicy bean mix & rice. Topped w BBQ sauce, grilled cheese, salsa, sour cream & jalapeños. Served with buffalo chips and L.S coleslaw.',6,'CAMPFIRE BURRITO',29)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (4,'Warm flour tortilla filled with roast chicken, together with cheese, lettuce, tomato, cucumber, red onion, mayonnaise & Mum''s tomato relish. All kids meals come with a small coleslaw salad plus a choice of chips or mashed potato.',7,'WRAP STAR',12.5)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (5,'Mini hot dogs on a stick, battered and flash fried in the furnace. Served with loads of tomato sauce.',8,'DEPUTY DOG',12.5)

INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (5,'Round off your dining experience with this classic dessert. Flavours ever changing.',9,'CREME BRULEE',12)
INSERT INTO [dbo].[MenuItem]([CategoryId],[Description],[Id],[Name],[Price]) VALUES (5,'Home made sweet pastry, layered with caramel, banana, sweet coffee cream and chocolate.',10,'BANOFFIE OIE',12)
GO