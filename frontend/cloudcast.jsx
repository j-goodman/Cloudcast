var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Run = require('./components/run.jsx');
var LoginForm = require('./components/auth/login_form.jsx');
var NewUserForm = require('./components/auth/newuser_form.jsx');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var router = (
  <Router history={hashHistory} >
    <Route path='/' component={Run}/>
    <Route path='/signin' component={LoginForm}/>
    <Route path='/newuser' component={NewUserForm}/>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  ReactDOM.render(
    router,
    root
  );
});
