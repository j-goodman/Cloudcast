var React = require('react');
var ApiUtil = require('../../util/api_util.js');

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

  render: function () {
    return (
      <main>
        <div className="auth-header-stretch group">
          <header className="auth-header-bar">

            <div className="auth-header-logo-image"></div>
            <h1 className="auth-header-logo">CLOUDCAST</h1>

            <ul className="auth-header-tabs">
              <li className="create-account-tab">Create Account</li>
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
          </form>
        </div>
      </main>
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
