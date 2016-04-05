var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Run = require('./components/run.jsx');
var LoginForm = require('./components/auth/login_form.jsx');
var NewUserForm = require('./components/auth/newuser_form.jsx');
var TrackForm = require('./components/tracks/track_form.jsx');
var TrackIndex = require('./components/tracks/index.jsx');
var UserDetail = require('./components/users/user_detail.jsx');
var UserTrackIndex = require('./components/users/user_detail_index.jsx');
var UserSeriesIndex = require('./components/users/user_detail_series.jsx');
var TrackDetail = require('./components/tracks/track_detail.jsx');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var router = (
  <Router history={hashHistory} >
    <Route path='/' component={Run}>
      <IndexRoute component={TrackIndex}/>
      <Route path='newtrack' component={TrackForm}/>
      <Route path='signin' component={LoginForm}/>
      <Route path='newuser' component={NewUserForm}/>
			<Route path='user/:id' component={UserDetail}>
        <Route path='tracks' component={UserTrackIndex}/>
        <Route path='series' component={UserSeriesIndex}/>
      </Route>
			<Route path='track/:id' component={TrackDetail}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  ReactDOM.render(
    router,
    root
  );
});
