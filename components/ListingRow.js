var React = require('react');

module.exports = ListingRow = React.createClass({render: function() {
    var g = Math.floor(this.props.listing.price / 10000),
      s = Math.floor(this.props.listing.price / 100) % 100,
      c = Math.floor(this.props.listing.price) % 100;
    var g_s = '',
      s_s = '',
      c_s = '';
    if (g != 0) {
      var g_s = <img src='/static/img/Gold.png'/>;
    } else {
      g = ''
    }
    if (s != 0) {
      var s_s = <img src='/static/img/Silver.png'/>;
    } else {
      s = ''
    }
    if (c != 0) {
      var c_s = <img src='/static/img/Copper.png'/>;
    } else {
      c = ''
    }
    return (
      <tr className="listrows">
        <td><img src={this.props.doc
        ? this.props.doc.img
        : ''} width="30" height="30"/>
          {this.props.doc
            ? this.props.doc.name
            : this.props.listing.item_id}</td>
        <td>{this.props.listing.quantity}</td>
        <td><font color='#CCAD00'><b>{g}</b></font>{g_s}
          <font color='#A0A0A0'><b> {s}</b></font>{s_s}
          <font color='#856007'><b> {c}</b></font>{c_s}</td>
      </tr>
    );
  }
});
