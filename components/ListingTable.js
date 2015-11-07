var React = require('react');
var _ = require('lodash');
var ListingRow = require('./ListingRow')

module.exports = ListingTable = React.createClass({
  getInitialState: function(props){
    props = props || this.props;

    return {
      update : 0,
      listings: [],
      docs: []
    };
  },
  handleData: function(data){
    var list = JSON.parse(data);
    var i = [];
    _.forEach(list, function(d){
      i.push(d.item_id);
    });
    i = _.uniq(i);
    this.setState({update:2, listings: list});
    var s = i.join(",")
    var request = new XMLHttpRequest();
    request.open('GET', '/database?id=' + s, true);
    request.send();
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
          var docs = JSON.parse(request.responseText)
          this.setState({docs: docs})
      } else {
        console.log("auth error")
      }
    }.bind(this);


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
    this.state.listings.forEach(function(listing) {
      var doc;
      this.state.docs.forEach(function(d) {
        if (d._id == listing.item_id)
          doc = d;
      })
      rows.push(<ListingRow listing={listing} key={listing.id} doc={doc}/>);
    }, this)
    return (
      <table className="listingtable">
        <thead>
          <tr className="listhead">
            <td colSpan="3">{this.props.time} {this.props.type}</td>
          </tr>
          <tr className="listlabel">
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
