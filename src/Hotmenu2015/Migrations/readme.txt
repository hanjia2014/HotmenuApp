1. open command prompt
2. run command "dnvm upgrade"
3. go to the directory where contains the project.json file
4. run command "dnu restore"
5. run command "dnx . ef"
6. run command "dnx . ef migration add InitialDatabase" to generate migration cs code
7. run command "dnx . ef migration script -o initialDatabase.sql" to generate sql script

note: the database needs to be manually created