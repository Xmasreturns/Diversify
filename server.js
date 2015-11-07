var express = require('express');
var browserify = require('browserify');
var React = require('react');
var path = require('path')
var jsx = require('node-jsx').install();
var app = express();
var db = require('./database');
var _ = require('lodash')

app.set('port', (process.env.PORT || 4500));

app.use('/static', express.static(__dirname + '/public'));

var server = require('http').createServer(app);
server.listen((process.env.PORT || app.get('port')), function(){
  console.log("Express server listening on port %d ", server.address().port);
});

app.get('/database', function(req,res){
  var s = req.query.id;
  var d = _.words(s, /[^, ]+/g)
  db.getItemData(d, res)
});

app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
