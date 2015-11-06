var express = require('express');
var browserify = require('browserify');
var React = require('react');
var path = require('path')
var jsx = require('node-jsx').install();
var app = express();

app.set('port', (process.env.PORT || 4500));

app.use(express.static("public"));

var server = require('http').createServer(app);
server.listen((process.env.PORT || app.get('port')), function(){
  console.log("Express server listening on port %d ", server.address().port);
});

app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
