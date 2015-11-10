/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var createBrowserHistory = require('history/lib/createBrowserHistory')

var DiversifyApp = require('./components/DiversifyApp');
var Index = require('./components/Index');
var Listings = require('./components/Listings');



ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Route path="/" component={DiversifyApp}>
        <IndexRoute component={Index}/>
        <Route path="/history" component={Listings}/>
        <Route path="/bookmarks" component={Index}/>
        <Route path="/investments" component={Index}/>
      </Route>
    </Router>,
    document.getElementById('react-app')
);
