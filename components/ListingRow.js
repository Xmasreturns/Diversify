var React = require('react');

module.exports = ListingRow = React.createClass({
  render: function(a){
    return (
      <tr>
          <td>{a}</td>
      </tr>
    );
  }
});
