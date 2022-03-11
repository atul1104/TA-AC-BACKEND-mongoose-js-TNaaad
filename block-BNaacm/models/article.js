var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    description: String,
    createdAt: Date,
  },
  { timestamps: true }
);

var Article = mongoose.model('User', articleSchema);
module.exports = Article;
