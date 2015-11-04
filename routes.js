/** @jsx React.DOM */

var JSX = require('node-jsx').install(),
  React = require('react'),
  ReactServer = require('react-dom/server'),
  DiversifyApp = require('./components/DiversifyApp');

module.exports = {
  index: function(req, res) {
      var markup = ReactServer.renderToString(<DiversifyApp apikey='' />);
      res.render('home', {
        markup : markup
      });
    }
}
