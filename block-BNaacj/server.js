var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to database');
});
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Index page');
});

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
