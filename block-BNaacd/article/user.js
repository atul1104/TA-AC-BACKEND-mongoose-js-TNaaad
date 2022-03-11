var mongoose = require('mongoose');
var userSchema = new Schema({
  name: { type: { String } },
  email: { type: { String, lowercase: true } },
  age: { type: { Number } },
});
