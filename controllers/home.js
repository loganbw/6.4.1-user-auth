var Robot = require('../models/robot');

var HomeController = {
   list: function(req, res){
    Robot.getAll(function(err, results){
      console.log('ERROR::' + err);
      res.render('robot/list', {models: results});
    });
  }
  // about: function(req, res){
  //   res.send('About what?');
  // },
  // contact: function(req, res){
  //   res.send("Don't contact me!");
  // }
};

module.exports = HomeController;
