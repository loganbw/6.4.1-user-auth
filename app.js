const express = require('express');
const exphbs = require('express-handlebars')
const routes = require('./router');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

const app = express();
//---------------------------------------------------------------//
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');








app.listen(3000);
