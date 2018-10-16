
# Programmatic SQL
In our lecture today, we explored postgres as a Relational Database Management System (RDBMS). We looked at how to connect using the builtp-in psql client and explored databases and specifically the tables that conform the music databases.

We then programmatically, using Node, connected through the 'pg' middleware/client driver and ran the SQL queries that we had run against the database directly. We incrementally turned isolated code into functions that achieved the following:

1. Constructed SQL from within JavaScript and ran it against a Postgres database.
2. Worked with the async nature of the execution of queries by implementing callbacks.
3. Used database connection parameters that would be used when connecting to the database from an external database. Remember that different access levels can be designated to accounts by RDBMS.
4. Implemented simple queries that provide apps with data services.
5. Used modules to isolate the persistence layer, so data access layer functions are separated from logic code

## Sanitation of user input to prevent SQL injection

A note from Juan Gonzalez in regards to sanitation of user input, topic that was briefly mentioned in the lecture:

"Sanitizing user input refers to the practice of making sure ANY parameters that are passed to a query have been checked and double-checked before they are used because the most common vulnerability in a web system is something called "SQL Injection".

And a nice illustration of SQL injection 
<img src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/forums/uploadfile/suthish_nair/07082016051954AM/Injection.PNG" />