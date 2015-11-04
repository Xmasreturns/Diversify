var express = require('express');
var browserify = require('browserify');
var exphbs = require('express-handlebars');
var React = require('react');
var jsx = require('node-jsx').install();
var app = express();
var routes = require('./routes');

app.set('port', (process.env.PORT || 4500));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));


var server = require('http').createServer(app);
server.listen((process.env.PORT || app.get('port')), function(){
  console.log("Express server listening on port %d ", server.address().port);
});

app.get('/', routes.index);
