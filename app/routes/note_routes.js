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
  
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };

    db.collection('notes')
      .update(details, note, (err, result) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(result);
        }
      })
  })

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