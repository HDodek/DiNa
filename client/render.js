"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var UserList = require('./components/main.js').UserList;
var list = require('./components/createUser.js').Users;
var request = require('./http_requests.js').fechRequest;


ReactDOM.render(<UserList />, document.getElementById('app'));
