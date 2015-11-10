var React = require('react');

module.exports = NavBar = React.createClass({
    render: function() {
        return (
          <div>
            <nav className="top-bar" data-topbar  role="navigation">
              <ul className="title-area">
                <li className="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
              </ul>
              <div className="logo">
                <a href="/">Diversify</a>
              </div>
              <section className="top-bar-section">
                <ul className="right">
                  <li><a href="#" data-reveal-id="myModal">Login/Register</a></li>
                </ul>
                <ul className="center-buttons">
                  <li><a href="/history">History</a></li>
                  <li><a href="/bookmarks">Bookmarks</a></li>
                  <li><a href="/investments">Investments</a></li>
                </ul>
              </section>
            </nav>
            <div id="myModal" className="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
              <form id="register">
                  <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" id="user"/>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" id="pass"/>
                  </div>
                  <button type="submit" className="btn btn-warning btn-lg">Signup</button>
              </form>
            </div>
          </div>
        );
    }
});
