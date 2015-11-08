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
    var i = [];
    _.forEach(data, function(d){
      i.push(d.item_id);
    });
    i = _.uniq(i);
    this.setState({update:2, listings: data});
    var s = i.join(",")
    var t = this;
    $.getJSON('/database', {id: s}, function(res){
        t.setState({docs: res})
      });
  },
  getData: function(){
    var t = this;
    if (this.props.apikey === '')
      return []

    var url = 'https://api.guildwars2.com/v2/commerce/transactions/' + t.props.time + '/' + t.props.type

    $.getJSON(url, {access_token : t.props.apikey}, function(res){
          t.handleData(res);
      });

  },
  render: function(){
    var rows = [];
    if (this.state.update == 0)
      this.getData();
    this.state.listings.forEach(function(listing) {
      var doc = [];
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
