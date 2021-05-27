const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const port = 8000;

app.use(express.urlencoded());

require('./app/routes') (app, {});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});