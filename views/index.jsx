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
    this.props.listings.forEach(function(listing) {
        rows.push(<ListingRow listing={listing} key={listing.id} />);
    }.bind(this));
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
  }
});

var UserBar = React.createClass({
    handleSubmit: function(e) {
      e.preventDefault();
      var apikey = this.refs.key.value.trim();
      if (!apikey)
        return;
      this.props.onSubmit(apikey);
    },
    render: function() {
        return (
            <form className="keyForm" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="API Key" ref="key" />
              <input type="submit" />
            </form>
        );
    }
});

var UserListingTables = React.createClass({
    getInitialState: function() {
        return {
            apikey: ''
        };
    },

    handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            apikey: apikey
        });
    },

    render: function() {
        return (
            <div>
                <UserBar
                    apikey={this.state.apikey}
                />
              <ListingTable
                    listings={this.props.listings}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <UserListingTables />,
    document.getElementById('container')
);
