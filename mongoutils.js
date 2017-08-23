var MongoClient = require('mongodb').MongoClient;

var mongo = {
  connect:  function(database, callback){
    MongoClient.connect(database, (err, db) => {
      this.db = db;
      callback(err, db);
    });
  }
};

// var Mongo = {
//   connect: function(database, callback){
    // this.db;
    // var self = this;

    //  MongoClient.connect(database, function(err, db){
        // console.log("THIS IS THE RETURN ERR:::" + JSON.stringify(err));
        // console.log("THIS IS THE RETURN DB:::" + JSON.stringify(db));
        //
        // if(!err) {
        //    console.log("We are connected");
        //    this.db = db;
          //  console.log("DB::" + JSON.stringify(db));
    //        callback(err, db);
    //      }
    //      else{
    //
    //        console.log("We are NOT connected");
    //      }
    //
    //   });
    // }

//}


module.exports = mongo;
