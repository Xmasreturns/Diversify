/** @jsx React.DOM */

var React = require('react');
var SearchBar = require('./SearchBar')

module.exports = DiversifyApp = React.createClass({
  getInitialState: function(props){
    props = props || this.props;

    return {
      apikey: '',
      keys: []
    };
  },

  handleAPIKey: function(apikey) {
    this.state.keys.push(apikey);
      this.setState({
          apikey : apikey.key,
          keys: this.state.keys
      });
  },

  render: function(){
    var keys = this.state.keys.map(function(key){
      return <Key key={key.num} test={key.test}></Key>
    });
    return(
      <div className="listings-main">
        <SearchBar/>
        <table>
          <thead>
            <tr>
              <td>
                ASDASFD
              </td>
            </tr>
          </thead>
          <tbody>
            {keys}
            <tr>
              <td>
                {this.state.apikey}
              </td>
              <td>
                AWRWR
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})


var Key = React.createClass({
  getInitialState: function(){
    return {
      num: this.props.num,
      test: this.props.test
    }
  },
  render: function(){
    return (
      <tr>
        <td>{this.props.num}</td>
        <td>{this.props.test}</td>
        <td>64545</td>
      </tr>
    )
  }
});
