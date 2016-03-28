'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var UserList = require('./components/main.js').UserList;
var list = require('./components/createUser.js').Users;
var request = require('./http_requests.js').fechRequest;
var routes = require('./config/routes');
import {Router, hashHistory} from 'react-router';


ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>, 
	document.getElementById('app'));
