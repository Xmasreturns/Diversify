var React = require('react');
var _ = require('lodash');
var ListingRow = require('./ListingRow')


module.exports = ListingTable = React.createClass({
  getInitialState: function(props){
    props = props || this.props;

    return {
      update : 0
    };
  },
  handleData: function(data){
    list = JSON.parse(data);
    this.setState({update:2});
  },
  getData: function(){
    if (this.props.apikey === '')
      return []
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.guildwars2.com/v2/commerce/transactions/' + this.props.time + '/' + this.props.type +  '?access_token=' + this.props.apikey, true);
    request.send();
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
          this.handleData(request.responseText);
      } else {
        console.log("auth error")
      }
    }.bind(this);

    request.onerror = function() {
      console.log(" error")
    };

  },
  render: function(){
    var rows = [];
    if (this.state.update == 0)
      this.getData();
    _.forEach(list, function(listing) {
        rows.push(<ListingRow listing={listing} key={listing.id} />);
    });
    return (
      <table className="listingtable">
        <thead>
          <tr className="listhead">
            <td colSpan="4">{this.props.time} {this.props.type}</td>
          </tr>
          <tr className="listlabel">
            <td>id</td>
            <td>item</td>
            <td>quantity</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});
var list = [];
