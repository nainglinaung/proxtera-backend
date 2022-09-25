### Proxtera Coding Test (Backend)

Proxtera Coding Challenge for second round


#### Description

1. Write an API using node.js that accepts excel (xls & xlsx) as an input. 
2. Validate the excel records with missing rows.
3. Valid records need to be inserted to MongoDB.
4. Invalid records must return as response. 
5. You can use Postman or a simple webapp to upload the excel file.


#### Prerequisite

- Docker and Docker Compose
- Node.js and npm 
- MongoDB (optional)


#### Installation 

This section include how to install the dependencies to start the instance


#### Clone the repo

- ```git clone git@github.com:nainglinaung/proxtera-backend.git```


install the npm dependencies 

- `npm install`


Run the Docker Instance for MongoDB

- `docker compose up` 


run the entry script

- `npm run dev`


Or other wise you can run the start.sh to start the application and database server if you already installed dependencies. 


### Testing 

Test folder is located in `test` and you can run the test by 

`npm test` 


### Load Test

If you need to generate the huge random data, you can achieve it by running

`npm run generate` 

It will export `test.xlsx` and can be used to import in POSTMAN. The file consists of one million records of data with defined schema. 


### Postman Collection 

The collection is located in the following URL and can be imported using link Options

https://www.getpostman.com/collections/02d68e4404ab6fb16c05


It consist of two endpoints 

`/` (GET) is for entry point for heartbeat testing and `/student` (POST) will accept file as import and will insert the data into MongoDB 












