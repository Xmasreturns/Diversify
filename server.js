var express = require('express');
var browserify = require('browserify');
var React = require('react');
var path = require('path')
var app = express();
var db = require('./database');
var _ = require('lodash')
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');

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

app.post('/login', function(req,res){
  var user = req.body.user;
  var pass = req.body.pass;
});

app.post('/register', function(req,res){
  var user = req.body.user;
  var pass = req.body.pass;
  var apikey = req.body.apikey;
  bcrypt.genSalt(4, function(err, salt){
    bcrypt.hash(pass, salt, function(err, hash){
      db.saveUserData({user: user, hash: hash, apikey: apikey}, res);
    })
  })
});

app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
