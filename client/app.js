'use strict';

import {Router, hashHistory} from 'react-router';
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');


ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>, 
	document.getElementById('app'));