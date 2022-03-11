var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var addressSchema = new Schema({
  village: String,
  city: { type: String, required: true },
  state: { type: String, required: true },
  pin: { type: Number },
  user: ObjectId,
});

var Address = mongoose.model('Address', addressSchema);
module.exports(Address);
