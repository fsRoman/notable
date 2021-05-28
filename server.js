const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const app = express();

const port = 8000;

app.use(express.urlencoded());

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  
  require('./app/routes') (app, database);

  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
});
