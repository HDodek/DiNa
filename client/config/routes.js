'use strict';

var React = require('react');
var Main = require('../components/index.js');
var OverView = require('../components/overview.js');
var Sites = require('../components/sites.js');
var PaymentCredits = require('../components/payment_credits.js');
var NewUser = require('../components/newUser.js');
var List = require('../components/main.js');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path ="/" component={Main}>
  	<Route path ="overview" component={OverView} />
  	<Route path ="sites" component={Sites} />
  	<Route path ="payment_credits" component={PaymentCredits} />
  	<Route path ="users" component={NewUser} />
  <IndexRoute component={List} />
  </Route>
);