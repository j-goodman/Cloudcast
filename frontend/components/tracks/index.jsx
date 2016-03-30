var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var TrackStore = require('../../stores/track.js');
var TrackIndexItem = require('./index_item.jsx');

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
      <ul>
        {this.state.tracks.map(function (track) {
          return <TrackIndexItem key={track.id}
          track={track} />;
        })}
      </ul>
    );
  }

});

module.exports = TrackIndex;
