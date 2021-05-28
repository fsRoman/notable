const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    
    db.collection('notes')
      .findOne(details, (e, item) => {
        if (e) {
          console.log(e);
          res.send(e);
        } else {
          res.send(item);
        };
      });
  });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    
    db.collection('notes')
      .deleteOne(details, (e, item) => {
        if (e) {
          console.log(e);
          res.send(e);
        } else {
          res.send(item);
        };
      });
  });

  app.post('/notes', (req, res) => {
    const note = {
      text: req.body.body,
      title: req.body.title
    };

    db.collection('notes')
      .insertOne(note, (e, result) => {
        if (e) {
          console.log(e);
          res.send(e);
        } else {
          res.send(result.ops[0]);
        };
      });
  });
};