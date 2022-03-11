var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  descrption: String,
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

var Article = mongoose.model('Article', articleSchema);
module.exports(Article);
