var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: ObjectId,
});
