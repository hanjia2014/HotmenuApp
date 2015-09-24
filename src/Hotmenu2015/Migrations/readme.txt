1. open command prompt
2. run command "dnvm upgrade"
3. go to the directory where contains the project.json file
4. run command "dnu restore"
5. run command "dnx . ef"
6. run command "dnx . ef migration add InitialDatabase" to generate migration cs code
7. run command "dnx . ef migration script -o initialDatabase.sql" to generate sql script

example: 
-- dnx . ef migration apply -c ApplicationDbContext
note: the database needs to be manually created




npm
-- in order to generate source map files for ts code, need to install typescript manually
-- run "npm install -g typescript"
-- open command prompt
-- use cmd go to the folder that contains ts files
-- run "tsc -sourcemap xxx.ts"