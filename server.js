var express = require('express');
var browserify = require('browserify');
var React = require('react');
var path = require('path')
var app = express();
var db = require('./database');
var _ = require('lodash')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.set('port', (process.env.PORT || 4500));
app.use('/static', express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: 'teststring', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

var server = require('http').createServer(app);
server.listen((
process.env.PORT || app.get('port')), function() {
  console.log("Express server listening on port %d ", server.address().port);
});

app.get('/database', function(req, res) {
  var s = req.query.id;
  var d = _.words(s, /[^, ]+/g)
  db.getItemData(d, res)
});

app.post('/login', function(req, res) {
  var user = req.body.user;
  var pass = req.body.pass;
});

app.post('/register', passport.authenticate('register', {
  successRedirect: '/history',
  failureRedirect: '/bookmark'
})
//console.log(req.body);
);

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

//Passport Configs
passport.serializeUser(function(user, done) {
  console.log(user.id)
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db
    .User
    .findById(id, function(err, user) {
      console.log(id)
      if (err) {
        return done(err);
      }
      done(null, user);
    });
});

passport.use('register', new Strategy({usernameField: 'user', passwordField: 'pass', passReqToCallback: true}, function(req, user, pass, done) {

  db
    .User
    .findOne({'user': user}, function(err, u) {
      if (err)
        return done(err)
      if (u) {
        return done(null, false, "username taken")
      } else {
        var u = new db.User({_id: new mongoose.Types
            .ObjectId(), user: user, pass: bcrypt.hashSync(pass, 5), apikey: 0, bookmarks: [], investments: [
            {}
          ]})
        u.save(function(err, newuser) {
          if (err) {
            return done(err);
          }
          return done(null, newuser);
        })
      }
    })
}))

passport.use('login', new Strategy({usernameField: 'user', passwordField: 'pass', passReqToCallback: true}, function(req, user, pass, done) {
  db
    .User
    .findOne({'user': user}, function(err, u) {
      if (err)
        return done(err)
      if (!u)
        return done(null, false, "user not found")
      if (!bcrypt.compareSync(pass, u.pass))
        return done(null, false, "wrong password")
      return done(null, u)
    })
}))
