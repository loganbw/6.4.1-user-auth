//var db = require('../mongoutils');

var Robot = {
  getAll: function(callback){
    // get the database connection
    // let db = Mongo.connect.db;
    let db = require('../mongoutils').db;
    
    db.collection('robots')
      .find()
      .limit(20)
      .toArray(callback);
  }
}

module.exports = Robot;
