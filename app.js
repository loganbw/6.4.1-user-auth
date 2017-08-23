const express = require('express');
const exphbs = require('express-handlebars')
const routes = require('./router');
// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
const mongo = require('./mongoutils');

const app = express();
//---------------------------------------------------------------//
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// pass argument of app into router function
routes(app);

// for the test suite; avoids app from running on port 3000 if you've loaded app into test suite
// if(require.main === 'module'){
  // app.listen(3000);
// }

mongo.connect('mongodb://localhost:27017/robotdb', () => {
  app.listen(3000);
});
