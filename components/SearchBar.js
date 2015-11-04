/** @jsx React.DOM */
var React = require('react');

module.exports = SearchBar = React.createClass({
    propTypes: {
         value:      React.PropTypes.string,
         onSubmit:   React.PropTypes.func
     },
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
