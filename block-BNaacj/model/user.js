var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, lowercase: true, match: /@/ },
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: Date,
  },
  { timestamps: true }
);
