var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TrackIndex = require('../tracks/index.jsx');

var Link = require('react-router').Link;

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: '',
      password: ''
    };
  },

  backToIndex: function () {
    this.context.router.push('/');
  },

  signInGuest: function (e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login({
      username: 'H. P. Lovecraft',
      password: 'password'
    }, function() {
      router.push('/#');
    });
  },

  render: function () {
    return (
			<div className='modal-wrapper'>
      <TrackIndex />
				<div className='modal-dimmer' onClick={this.backToIndex}></div>
				<main className='auth-form-main group'>
	        <div className="auth-header-stretch group">
	          <header className="auth-header-bar">

	            <div className="auth-header-logo-image"></div>
	            <h1 className="auth-header-logo">CLOUDCAST</h1>

	            <ul className="auth-header-tabs">
	              <Link to={'/newuser'} className="create-account-tab">Create Account</Link>
	              <li className="sign-in-selected">
	                <a href="#">Sign In</a>
	              </li>
	            </ul>

	          </header>
	        </div>

	        <div className="auth-main">
	          <form
	            className="auth-form"
	            method="post"
	            onSubmit={this.handleSubmit}
	          >

	            <label>
	              Your username <br />
	              <input
	                onChange={this.updateName}
	                className="email-input"
	                type="text"
	                value={this.state.username}
	              />
	            </label>
	            <br />

	            <label className="password-input-wrapper">
	              Your password
	              <br />
	              <input
	                onChange={this.updatePassword}
	                className="password-input"
	                type="password"
	                value={this.state.password}
	              />
	            </label>
	            <br />

	            <label className="terms-agreement-wrapper">
	              Welcome to Cloudcast, the internet's only podcast sharing site.
	            </label>

	            <input className="submit-button" type="submit" value="Sign in" />
              <p className='demo-signin orange-link' onClick={this.signInGuest}>Sign in using a demo account</p>
	          </form>
	        </div>
	      </main>
			</div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.login(this.state, function() {
      router.push('/#');
    });
  },

  updateName: function(e) {
    this.setState({ username: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
