'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var NewUser = React.createClass({

	getInitialState: function() {
		return{
			firstName: '',
			lastName: '',
			createdAt: Date.now()
		}
	},



	render: function() {
		return(
			<div>
				<h1>Add new User</h1>
					<form>
						<input type='text' />
					</form>
			</div>
			)
	}
})

module.exports = NewUser;