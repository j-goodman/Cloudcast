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
    this.setState({ track: TrackStore.getTrack(this.props.trackId) });
  },

  render: function () {
    if (!this.state.track) {
      return(<main></main>);
    } else {
      var track = this.state.track;
      return(
        <ul className='track-demo'>
          <img className='track-demo-image' src={track.image}></img>
          <li className='track-order'>{this.props.index+1}</li>
          <a
            href={'#/user/'+track.user.id+'/tracks'}
            className='track-demo-username'>
            {track.user.username}
          </a>
          <li className='track-demo-username'>–</li>
          <a href={'#/track/'+track.id}>
            <li className='track-demo-title'>{track.title}</li>
          </a>
        </ul>
      );
    }
  }
});

module.exports = IndexItem;
