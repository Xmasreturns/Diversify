/** @jsx React.DOM */
var React = require('react');

module.exports = SearchBar = React.createClass({
    handleSubmit: function(e) {
      e.preventDefault();
      console.log("2")
      var apikey = this.refs.key.value.trim();
      if (!apikey)
        return;
      this.props.handleAPIKey({num: apikey, test: "34"});
      console.log("1")
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
