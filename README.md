# NODE-CRUD DOCKER STARTER
by Jacob Pelletier
>Purpose: build towards Udacity's Full Stack Javascript project - backend
>See https://github.com/jacobjpelletier/the-definitive-node-ts-postgres-starter for in depth project setup information


### To Get Up and Running Quickly:
1. clone or download repo
2. run `docker-compose up -d --build && docker-compose logs -f`
3. run migrations with `db-migrate up`
4. Once docker running, open another terminal and run `docker ps` to get `id`
5. `docker exec -it <id> psql -U postgres postgres` to login to psql DB
6. `\c postgres` to see postgres DB (name defined in docker-compose)
7. `dt` to see tables
   1. should see migrations and user_profile
8. `SELECT * FROM user_profile;`
   1. see no user
9. `SELECT * FROM migrations;`
   1. see two items:
      1. create-migrations-table
      2. create-table
      
Commands To Perform Once Connected To DB To Verify:  
•	\l List databases
•	\c Connect to a database
         \c <db_name>
•	\dt Display Tables in a database
•	\q Quit out of psql to normal terminal



helpful tip: `docker exec -it <id> /bash` to login to container as root.
