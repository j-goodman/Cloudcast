var React = require('react');
var ApiUtil = require('../util/api_util.js');
var SessionStore = require('../stores/session.js');
var TrackStore = require('../stores/track.js');

var Link = require('react-router').Link;

var Homebar = React.createClass({

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
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

    var user = {};

    var loggedIn = SessionStore.isLoggedIn();

    if (loggedIn) {
      user = SessionStore.currentUser();
    }

    var headerUserTab;
    var profileTab;
    var demoSignin;


    if (loggedIn) {
      headerUserTab = (
        <button onClick={ApiUtil.logout} className='link-tab user-dropdown-tab' href='session/new'>Sign Out</button>
      );
      profileTab = (
        <a href={'/#/user/'+SessionStore.currentUser().id+'/tracks'} className='profile-tab'></a>
      );
      uploadTab = (
        <Link to={'/newtrack'} className='link-tab upload-tab'>Upload</Link>
      );
      demoSignin = <a href={'/#/user/'+SessionStore.currentUser().id+'/tracks'} className='link-tab home-tab'>Profile</a>
    } else {
      headerUserTab = (
        <div className='link-tab user-or-signin-tab'>
          <Link to={'/signin'} className='link-tab header-sign-in-tab'>Sign In</Link>
        </div>
      );
      profileTab = (
        <a href='#' className='link-tab collection-tab non-display'></a>
      );
      uploadTab = (<Link to={'/newuser'} className='link-tab upload-tab'>New User</Link>);
      demoSignin = <div onClick={this.signInGuest} className='link-tab home-tab'>Demo Signin</div>
    }

    return(
      <div className='index-main'>
        <div className='index-navbar-stretch'>
          <ul className='index-navbar group'>
            <a href='#' className='link-tab index-logo-image'></a>
            {demoSignin}
            <div className='search-bar-tab non-display'>
              <input className='search-bar'
							placeholder='Search'
							type='text'></input>
            </div>
            {uploadTab}
            {headerUserTab}
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Homebar;
