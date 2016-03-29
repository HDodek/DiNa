'use strict';

var React = require('react');
var Users = require('./createUser');
var url = 'http://js-assessment-backend.herokuapp.com/users.json';
var fetchRequest = require('../http_requests.js');
var routes = require('../config/routes');
import {Router, hashHistory} from 'react-router';
require('../../public/style/navbar.css');



var UserList = React.createClass({
	getInitialState: function() {
		return {
			user: [],
			firstName: '',
			lastName: '',
			createdAt: 0,
			//isClicked: false,
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

	//handleOnClick: function() {
	//var isClicked = this.state.isClicked;
	//var style = {textDecoration: 'none'};
	//if (isClicked === true) {
	//	style = {textDecoration: 'line-through'}
	//	}
	//},

	render: function() {

    return (
    	<div> 
    		<Users user={this.state.user} /*onClick={this.handleOnClick}*//>

		</div>
    	);
    
  	}
});

module.exports = UserList;


