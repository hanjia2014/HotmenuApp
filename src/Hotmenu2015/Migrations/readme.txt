1. open command prompt
2. run command "dnx . ef migration add InitialDatabase" to generate migration cs code
3. run command "dnx . ef migration script -o initialDatabase.sql" to generate sql script

note: the database needs to be manually created