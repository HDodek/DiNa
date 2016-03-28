'use strict';

var React = require('react');
var Main = require('../components/index.js');
var List = require('../components/main.js');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path ="/" component={Main}>
  <IndexRoute component={List} />
  </Route>
);