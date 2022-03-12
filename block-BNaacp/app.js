//requires
var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');

//connect to mongoDB
mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to database');
});

//Instantiate the app
var app = express();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Welcome to index page');
});
app.post('/users', (req, res) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});
app.get('/users', (req, res) => {
  User.find({}, (err, user) => {
    console.log(err);
    res.json(user);
  });
});
app.put('/users', (req, res) => {
  User.update(
    { sports: 'Cricket' },
    req.body,
    { new: true },
    (err, updatedUser) => {
      console.log(err);
      res.json(updatedUser);
    }
  );
});
app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    res.send(`${deletedUser} is deleted`);
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
