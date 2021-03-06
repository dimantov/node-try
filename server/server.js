var{mongoose} = require('./db/mongoose.js');
var{Todo} = require('./models/todo.js');
var{User} = require('./models/user.js');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
})



app.listen(3000, () => {
  console.log('Server started at port 3000');
});
