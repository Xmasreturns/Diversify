/** @jsx React.DOM */
var React = require('react');
var ListingTable = require('./ListingTable')
var NavBar = require('./NavBar')

module.exports = DiversifyApp = React.createClass({
  getInitialState: function(props){
    props = props || this.props;

    return {
      update : 0
    };
  },
  render: function(){
    return(
      <div className="listings-main">
        <NavBar onSubmit={this.handleAPIKey}/>
        {this.props.children}
      </div>
    )
  }
})
var list = [];
