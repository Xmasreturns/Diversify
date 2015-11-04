var React = require('react');

var ListingCategoryRow = React.createClass({
  render: function(){
    return (<tr><th colSpan="3">{this.props.listcategory}</th></tr>);
  }
});

var ListingRow = React.createClass({
  render: function(){
    return (
      <tr>
          <td>{this.props.listing.id}</td>
          <td>{this.props.listing.item}</td>
          <td>{this.props.listing.quantity}</td>
          <td>{this.props.listing.price}</td>
      </tr>
    );
  }
});

var ListingTable = React.createClass({
  render: function(){
    var rows = [];
    if (!this.props.listings)
      return ( <tbody /> )
    this.props.listings.forEach(function(listing) {
        rows.push(<ListingRow listing={listing} key={listing.id} />);
    }.bind(this));
    return (
      <tbody>{rows}</tbody>
    );
  }
});

var UserListingTables = React.createClass({
    getInitialState: function() {
        return {
            apikey: ''
        };
    },

    render: function() {
        return (
            <div>
              <ListingTable
                    listings={this.props.listings}
                />
            </div>
        );
    }
});