var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: String,
    createdAt: Date,
    password: { type: String, minlength: 5, maxlength: 15 },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
