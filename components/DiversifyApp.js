/** @jsx React.DOM */
var React = require('react');
var ListingTable = require('./ListingTable')
var NavBar = require('./NavBar')
var $ = require('jquery')

module.exports = DiversifyApp = React.createClass({
  getInitialState: function(props){
    props = props || this.props;

    return {
      update : 0,
      checklogin : 0,
      user: null
    };
  },
  render: function(){
    var t = this;
    if (this.state.checklogin == 0){
      $.get('/auth/user', function(data){
        if (data != undefined)
          t.setState({checklogin : 1, user : data});
        else
          t.setState({checklogin : 1, user : null});
      })
    }
    return(
      <div className="listings-main">
        <NavBar user={this.state.user}/>
        {this.props.children}
      </div>
    )
  }
})
var list = [];
