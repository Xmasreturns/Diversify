var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var SearchBar = require('./SearchBar')
var ListingTable = require('./ListingTable')


module.exports = ListingRow = React.createClass({
  getInitialState: function(props){
    props = props || this.props;
    return {
      apikey: '',
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
    return (
      <div>
        <SearchBar onSubmit={this.handleAPIKey}/>
        <div className="listrow">
          <div className="large-3 columns">
            <ListingTable time="history" type="sells" apikey={this.state.apikey}/>
          </div>
          <div className="large-3 columns">
            <ListingTable time="history" type="buys" apikey={this.state.apikey}/>
          </div>
          <div className="large-3 columns">
            <ListingTable time="current" type="sells" apikey={this.state.apikey}/>
          </div>
          <div className="large-3 columns">
            <ListingTable time="current" type="buys" apikey={this.state.apikey}/>
          </div>
        </div>
      </div>
    );
  }
});
