var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', (err) => {
  console.log(err ? err : 'Connected to database');
});

var app = express();

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
