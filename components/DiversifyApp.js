/** @jsx React.DOM */

var React = require('react');
var SearchBar = require('./SearchBar')
var ListingTable = require('./ListingTable')
var ListingRow = require('./ListingRow')

module.exports = DiversifyApp = React.createClass({

  getInitialState: function(props){
    props = props || this.props;

    return {
      apikey: '',
      update : 0
    };
  },

  handleAPIKey: function(apikey) {
    if (apikey === this.state.apikey){
      return;
      }
    else{
      var pattern = new RegExp("^(([a-zA-Z0-9]){8}-([a-zA-Z0-9]){4}-([a-zA-Z0-9]){4}-([a-zA-Z0-9]){4}-([a-zA-Z0-9]){12}){2}$");
      if (!pattern.test(apikey)){
        console.log("invalid key format")
        return;
      }
        this.setState({
          apikey : apikey,
          update: 1
        });
      }
      //082E318D-677B-B144-9617-01363B2B80E2574ED925-409F-49B1-B2A9-AC32D940E244
  },
  render: function(){
    return(
      <div className="listings-main">
        <SearchBar onSubmit={this.handleAPIKey}/>
        <div className="row">
          <div className="small-3 columns">
            <ListingTable time="history" type="sells" apikey={this.state.apikey}/>
          </div>
          <div className="small-3 columns">
            <ListingTable time="history" type="buys" apikey={this.state.apikey}/>
          </div>
        </div>
        <div className="row">
          <div className="small-3 columns">
            <ListingTable time="current" type="sells" apikey={this.state.apikey}/>
          </div>
          <div className="small-3 columns">
            <ListingTable time="current" type="buys" apikey={this.state.apikey}/>
          </div>
        </div>
      </div>
    )
  }
})
var list = [];
