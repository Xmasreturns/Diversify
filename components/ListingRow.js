var React = require('react');

module.exports = ListingRow = React.createClass({
  render: function(){
    return (
      <tr className="listrows">
          <td>{this.props.listing.id}</td>
          <td>{this.props.listing.item_id}</td>
          <td>{this.props.listing.quantity}</td>
          <td>{this.props.listing.price}</td>
      </tr>
    );
  }
});
