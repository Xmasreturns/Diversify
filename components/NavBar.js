var React = require('react');

module.exports = NavBar = React.createClass({
    render: function() {
        return (
          <div className="navbar">
            <nav className="navrow">
              <a className="header" href="/">Diversify</a>
              <ul className="nav">
                <li><a className="navbutton" href="/history">History</a></li>
                <li><a className="navbutton" href="/bookmarks">Bookmarks</a></li>
                <li><a className="navbutton" href="/investments">Investments</a></li>
              </ul>
            </nav>
        </div>
        );
    }
});
