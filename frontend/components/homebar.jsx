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

  render: function () {

    var user = {};

    var loggedIn = SessionStore.isLoggedIn();

    if (loggedIn) {
      user = SessionStore.currentUser();
    }

    var headerUserTab;

    if (loggedIn) {
      headerUserTab = (
        <button onClick={ApiUtil.logout} className='link-tab user-dropdown-tab' href='session/new'>Sign Out</button>
      );
      profileTab = (
        <a href={'/#/user/'+SessionStore.currentUser().id+'/tracks'} className='link-tab collection-tab'>Profile</a>
      );
      uploadTab = (<Link to={'/newtrack'} className='link-tab upload-tab'>Upload</Link>);
    } else {
      headerUserTab = (
        <div className='link-tab user-or-signin-tab'>
          <Link to={'/signin'} className='link-tab header-sign-in-tab'>Sign In</Link>
        </div>
      );
      profileTab = (
        <a href='#' className='link-tab collection-tab'></a>
      );
      uploadTab = (<Link to={'/newuser'} className='link-tab upload-tab'>New User</Link>);
    }

    return(
      <div className='index-main'>
        <div className='index-navbar-stretch'>
          <ul className='index-navbar group'>
            <a href='#' className='link-tab index-logo-image'></a>
            <a href='#' className='link-tab home-tab'>Home</a>
            {profileTab}
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
