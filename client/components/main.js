'use strict';

var React = require('react');
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

	///handleOnClick: function() {
	//	this.setState({isClicked: !this.state.isClicked})
	//},


	render: function() {
	//var isClicked = this.state.isClicked;
	//var style = {textDecoration: 'none'};
	//if (isClicked) {
	//	style = {textDecoration: 'line-through'}
	//};

    return (
    	<div> 
    		<Users user={this.state.user} />
    		
		</div>
    	);
  	}
});

module.exports = UserList;


