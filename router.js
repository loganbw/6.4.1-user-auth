var express = require('express');
var HomeController = require('./controllers/home');
// var PostController = require('./controllers/post');

module.exports = function(app){
  var homeRouter = express.Router();
  // const postRouter = express.Router();

  homeRouter.get('/', HomeController.index);
  // homeRouter.get('/about/', HomeController.about);
  // homeRouter.get('/contact/', HomeController.contact);

  // postRouter.get('/', PostController.list);
  // postRouter.get('/:id/', PostController.detail);

  app.use('/', homeRouter);
  // app.use('/post', postRouter);
}
