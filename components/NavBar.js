var React = require('react');

module.exports = NavBar = React.createClass({
    render: function() {
        return (
          <nav className="top-bar" data-topbar>
            <ul className="title-area">
              <li className="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
            </ul>
            <div className="logo">
              <a href="/">Diversify</a>
            </div>
            <section className="top-bar-section">
              <ul className="center-buttons">
                <li><a href="/history">History</a></li>
                <li><a href="/bookmarks">Bookmarks</a></li>
                <li><a href="/investments">Investments</a></li>
              </ul>
            </section>
          </nav>
        );
    }
});
