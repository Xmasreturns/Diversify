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
        this.setState({
            update: 2
        });
      }
    else{
        this.setState({
          apikey : apikey,
          update: 1
        });
      }
      //082E318D-677B-B144-9617-01363B2B80E2574ED925-409F-49B1-B2A9-AC32D940E244
  },
  getData: function(){
    console.log("Get");
    $.getJSON('https://api.guildwars2.com/v2/commerce/transactions/history/sells', { access_token : this.state.apikey }, function(data){
      _.forEach(data, function(n, key){
        list.push(n);
      });
    });
  },
  render: function(){
    if(this.state.update == 1)
      this.getData();
    return(
      <div className="listings-main">
        <SearchBar onSubmit={this.handleAPIKey}/>
        <table>
          <thead>
            <tr>
              <td colSpan='4'>SELLS</td>
            </tr>
            <tr>
              <td>
                id
              </td>
              <td>
                item
              </td>
              <td>
                quantity
              </td>
              <td>
                price
              </td>
            </tr>
          </thead>
          <ListingTable listings={list}/>
        </table>
      </div>
    )
  }
})
 var list = []
