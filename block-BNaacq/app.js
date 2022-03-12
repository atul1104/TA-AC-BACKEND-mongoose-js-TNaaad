//requires
var express = require('express');
var mongoose = require('mongoose');
var Article = require('./models/article');
var Comment = require('./models/comment');
var User = require('./models/user');

//connect to the database
mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to database');
});
//Instantiate the app
var app = express();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Welcome to index page');
});
//create
app.post('/users', (req, res, next) => {
  User.create(req.body, (err, user) => {
    next(err);
    res.json(user);
  });
});
app.post('/articles', (req, res, next) => {
  Article.create(req.body, (err, article) => {
    next(err);
    res.json(article);
  });
});
app.post('/comments', (req, res, next) => {
  Comment.create(req.body, (err, comment) => {
    next(err);
    res.json(comment);
  });
});
//Read
app.get('/articles', (req, res, next) => {
  Article.find({}, (err, article) => {
    next(err);
    res.json({ article: article });
  });
});
app.get('/comment', (req, res, next) => {
  Comment.find({}, (err, comment) => {
    next(err);
    res.json({ comment: comment });
  });
});
app.get('/users', (req, res, next) => {
  User.find({}, (err, user) => {
    next(err);
    res.json({ user: user });
  });
});
//Update
app.put('/articles/:id', (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      next(err);
      res.json(updatedArticle);
    }
  );
});
app.put('/comment/:id', (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (err, updatesComment) => {
      next(err);
      res.json(updatesComment);
    }
  );
});
app.put('/user/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    next(err);
    res.json(updatedUser);
  });
});
//Delete
app.delete('/article', (req, res, next) => {
  Article.findByIdAndDelete(id, (err, deletedArticle) => {
    next(err);
    res.send(`${deletedArticle} is deleted`);
  });
});
app.delete('/comment', (req, res, next) => {
  Comment.findByIdAndDelete(id, (err, deletedComment) => {
    next(err);
    res.send(`${deletedComment} is deleted`);
  });
});
app.delete('/user', (req, res, next) => {
  User.findByIdAndDelete(id, (err, deletedUser) => {
    next(err);
    res.send(`${deletedUser} is deleted`);
  });
});

//error handler
app.use((err, req, res, next) => {
  res.send(err);
});

//listener
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
