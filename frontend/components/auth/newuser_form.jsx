var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var Link = require('react-router').Link;

var NewUserForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: '',
      password: ''
    };
  },

  render: function () {
    return (
			<div className='modal-wrapper'>
				<div className='modal-dimmer'></div>
	      <main className='auth-form-main group'>
	        <div className="auth-header-stretch group">
	          <header className="auth-header-bar">

	            <div className="auth-header-logo-image"></div>
	            <h1 className="auth-header-logo">CLOUDCAST</h1>

	            <ul className="auth-header-tabs">
	              <li className="create-account-selected">
	                <a href="#">Create Account</a>
	              </li>
	              <Link to={'/signin'} className="sign-in-tab">Sign In</Link>
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
	              What do you want your username to be? <br />
	              <input
	                onChange={this.updateName}
	                className="email-input"
	                type="text"
	                value={this.state.username}
	              />
	            </label>
	            <br />

	            <label className="halved-password-input-wrapper">
	              Choose a password
	              <br />
	              <input
	                onChange={this.updatePassword}
	                className="halved-password-input"
	                type="password"
	                value={this.state.password}
	              />
	            </label>

	            <label className="halved-password-input-wrapper">
	              Re-type password
	              <br />
	              <input
	                onChange={this.updatePassword}
	                className="halved-password-input"
	                type="password"
	                value={this.state.password}
	              />
	            </label>
	            <br />

	            <label className="terms-agreement-wrapper">
	              <input type="checkbox" name="" value="unchecked" />
	              I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
	            </label>

	            <input className="submit-button" type="submit" value="Create account" />
	          </form>
	        </div>
	      </main>
			</div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    ApiUtil.createUser(this.state, function() {
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

module.exports = NewUserForm;
