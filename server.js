const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./config/db');
const app = express();

const port = 8000;

app.use(express.urlencoded());

MongoClient.connect(dbConfig.url).then(connection => {
  
  const db = connection.db(connection.dbName);
  require('./app/routes') (app, db);

  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
}).catch(err => {
  console.log("ERROR connection ", err)
});
