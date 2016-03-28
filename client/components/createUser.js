'use strict';

var React = require('react');
var handleOnClick = require('./main.js');

var Users = React.createClass({
  renderName: 'Users',


  render: function(response) {
    var oneUser = function(user) {
      return (<li key={user.id}> {user.first_name} {user.last_name} {user.created_at} <button>isActive</button> </li>);
    };
    return (<ul>{this.props.user.map(oneUser)}</ul>
    	)
  }
});

module.exports = Users;