'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Users = require('./createUser');
var url = 'http://js-assessment-backend.herokuapp.com/users.json';
var fetchRequest = require('../http_requests.js');
var routes = require('../config/routes');
import {Router, hashHistory} from 'react-router';


var UserList = React.createClass({
	getInitialState: function() {
		return {
			user: [],
			firstName: '',
			lastName: '',
			createdAt: 0,
		};
	},

	componentDidMount: function() {
		this.listUsers();
	},

	listUsers: function() {
		fetchRequest('GET', url, null, this.updateList);
	},

	updateList: function(response) {
		this.setState({user: JSON.parse(response)})
	},


	render: function() {
    return (
    	<div> 
    		<Users user={this.state.user}/>
		</div>
    	);
  	}
});

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>, 
	document.getElementById('app'));



