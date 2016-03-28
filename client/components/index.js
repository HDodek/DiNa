'use strict';

import React from 'react';
import {Link} from 'react-router';

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <nav className="navbar">
          <div className="overview">
            <Link to="overview">Overview</Link>
          </div>
          <div className="sites">
            <Link to="sites">Sites</Link>
          </div>
          <div className="users">
            <Link to="users">Users</Link>
          </div>
          <div className="payment_credits">
            <Link to="payment_credits">Payment and Credits</Link>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;