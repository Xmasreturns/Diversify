/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var DiversifyApp = require('./components/DiversifyApp');

// Render the components, picking up where react left off on the server
ReactDOM.render(
  <DiversifyApp/>,
  document.getElementById('react-app')
);
