var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TrackStore = require('../../stores/track.js');
var SessionStore = require('../../stores/session.js');
var TrackIndexItem = require('./index_item.jsx');
var IndexSidebar = require('./index_sidebar.jsx');

var MainIndex = React.createClass({
  getInitialState: function () {
    return { tracks: TrackStore.all() };
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  componentDidMount: function () {
    this.trackListener = TrackStore.addListener(this._onChange);
    ApiUtil.fetchAllTracks();
    this.sessionListener = SessionStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.trackListener.remove();
    this.sessionListener.remove();
  },

  render: function() {

    var loggedIn = SessionStore.isLoggedIn();

    if (loggedIn) {
      user = SessionStore.currentUser();
    }

    var welcomeMessage;

    if (loggedIn) {
      welcomeMessage = (
        <h2 className='stream-header'>Welcome, <a href={'/#/user/'+SessionStore.currentUser().id+'/tracks'} className="orange-link">{user.username}</a>. Hear our latest podcasts:</h2>
      );
    } else {
      welcomeMessage = (
        <h2 className='stream-header'>Make an account to start collecting and sharing podcasts</h2>
      );
    }
    return (
      <main className='index-wrapper group'>
        <div className='index-page-main'>
          <div>
            <br />
            {welcomeMessage}
            <br />
            <ul className='track-list'>
              {this.state.tracks.map(function (track) {
                if (track) {
                  return <TrackIndexItem key={track.id}
                  track={track} user={track.user}/>;
                }
              })}
            </ul>
          </div>
          <div className='index-sidebar'>
            <IndexSidebar />
          </div>
        </div>
      </main>
    );
  }
});

module.exports = MainIndex;
