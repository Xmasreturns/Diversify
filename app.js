/** @jsx React.DOM */ 

var React = require('react');
var DiversifyApp = require('./components/DiversifyApps');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
React.renderComponent(
  <DiversifyApp tweets={initialState}/>,
  document.getElementById('react-app')
);
