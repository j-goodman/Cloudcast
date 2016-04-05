var React = require('react');

var TrackStore = require('../../stores/track.js');
var ApiUtil = require('../../util/api_util.js');

var IndexItem = React.createClass({

  getInitialState: function () {
    return { track: null };
  },

  componentDidMount: function () {
    this.trackListener = TrackStore.addListener(this._onChange);
    ApiUtil.fetchSingleTrack(this.props.trackId);
  },

  componentWillUnmount: function () {
    this.trackListener.remove();
  },

  _onChange: function () {
    this.setState({ track: TrackStore.getTrack() });
  },

  render: function () {
    if (!this.state.track) {
      return(<main></main>);
    } else {
      var track = this.state.track[this.props.trackId];
      return(
        <ul className='track-demo'>
          <li className='track-demo-image' />
          <li className='track-order'>{this.props.index+1}</li>
          <li className='track-demo-username'>{track.user.username}</li>
          <li className='track-demo-username'>–</li>
          <li className='track-demo-title'>{track.title}</li>
          <li className='small-play-icon' />
        </ul>
      );
    }
  }
});

module.exports = IndexItem;
