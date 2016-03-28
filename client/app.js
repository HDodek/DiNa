'use strict';

import {Router, hashHistory} from 'react-router';
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');
var Main = require('./components/index.js');


ReactDOM.render(
	<Main />,
    document.getElementById('app'));