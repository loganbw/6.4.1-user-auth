
var HomeController = {
  index: function(req, res){
    res.send('Hello!');
  },
  about: function(req, res){
    res.send('About what?');
  },
  contact: function(req, res){
    res.send("Don't contact me!");
  }
};

module.exports = HomeController;
