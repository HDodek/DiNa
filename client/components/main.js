'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var url = 'http://js-assessment-backend.herokuapp.com/users.json';
var fetchRequest = require('../http_requests.js');

var Users = React.createClass({
  renderName: 'Users',

  render: function(response) {
    var oneUser = function(user) {
      return (<li key={user.id}>{user.first_name} {user.last_name} {user.created_at}</li>);
    };
    return (<ul>{this.props.user.map(oneUser)}</ul>
    	)
  }
});

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

ReactDOM.render(<UserList />, document.getElementById('app'));



