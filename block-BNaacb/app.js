var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to Database');
});

var app = express();

app.get('/', (req, res) => {
  res.send('Welcome to index page');
});
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
