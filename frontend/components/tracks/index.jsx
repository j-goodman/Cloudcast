var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TrackStore = require('../../stores/track.js');
var TrackIndexItem = require('./index_item.jsx');
var Link = require('react-router').Link;

var TrackIndex = React.createClass({
  getInitialState: function () {
    return { tracks: TrackStore.all() };
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  componentDidMount: function () {
    this.trackListener = TrackStore.addListener(this._onChange);
    ApiUtil.fetchAllTracks();
  },

  componentWillUnmount: function () {
    this.trackListener.remove();
  },

  render: function () {
    return(
      <div className='index-main'>
        <div className='index-navbar-stretch'>
          <ul className='index-navbar group'>
            <a href='#' className='link-tab index-logo-image'></a>
            <a href='#' className='link-tab home-tab'>Home</a>
            <a href='#' className='link-tab collection-tab'>Collection</a>
            <div className='search-bar-tab'>
              <input className='search-bar' value='Search' type='text'></input>
            </div>
            <a href='#' className='link-tab upload-tab'>Upload</a>
            <div className='link-tab user-or-signin-tab'>
              <Link to={'/signin'} className='link-tab header-sign-in-tab' href='session/new'>Sign In</Link>
            </div>
          </ul>
        </div>
        <div className='index-page group'>
          <div className='index-page-main'>
            <h2 className='stream-header'>Hear the latest from your stream:</h2>
            <ul className='track-list'>
              {this.state.tracks.map(function (track) {
                return <TrackIndexItem key={track.id}
                track={track} />;
              })}
            </ul>
          </div>
          <div className='index-sidebar'>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TrackIndex;
