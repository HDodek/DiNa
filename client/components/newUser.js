'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var NewUser = React.createClass({

	getInitialState: function() {
		return{
			firstName: '',
			lastName: '',
			createdAt: 0,
		}
	},

	firstNameOnChange: function(event) {
    this.setState({firstName: event.target.value});
  },

  lastNameOnChange: function(event) {
    this.setState({firstName: event.target.value});
  },

  createdAtOnChange: function(event) {
    this.setState({firstName: event.target.value});
  },

	render: function() {
		return(
			<div>
				<h1>Add new User</h1>
					<form>
						<input onChange={this.firstNameOnChange} value={this.firstName} placeholder='First name'/>
						<input onChange={this.lastNameOnChange} value={this.lastName} placeholder='Last name'/>
						<input onChange={this.createdAtOnChange} value={this.createdAt} type='date'/>
						<button>Save</button>
					</form>
			</div>
			)
	}
})

module.exports = NewUser;