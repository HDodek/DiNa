'use strict';

var React = require('react');
var Main = require('../components/index.js');
var Overview = require('../components/overview.js');
var Sites = require('../components/sites.js');
var Users = require('../components/users.js');
var Payment_credits = require('../components/payment_credits.js');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path ="/" component={Main}>
    <Route path="overview" component={Overview} />
    <Route path="sites" component={Sites} />
    <Route path="users" component={Users} />
    <Route path="payment_credits" component={Payment_credits} />
    <IndexRoute component={Main} />
  </Route>
);