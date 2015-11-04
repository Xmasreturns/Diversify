var React = require('react');
var _ = require('lodash');

module.exports = ListingTable = React.createClass({
  render: function(){
    var rows = [];
    _.forEach(this.props.listings, function(listing) {
        rows.push(<ListingRow listing={listing} key={listing.id} />);
    });
    return (
      <tbody>{rows}</tbody>
    );
  }
});
