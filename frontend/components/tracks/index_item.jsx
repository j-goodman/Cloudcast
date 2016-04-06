var React = require('react');
var SessionStore = require('../../stores/session.js');
var ApiUtil = require('../../util/api_util.js');
var TrackActions = require('../../actions/track_actions.js');

var IndexItem = React.createClass({
  destroyTrack: function () {
    ApiUtil.destroyTrack(this.props.track.id, TrackActions.deleteTrack.bind(null, this.props.track.id));
  },

  render: function () {
    var track = this.props.track;
    var user = this.props.track.user || this.props.user;
    if (SessionStore.currentUser() && user.id === SessionStore.currentUser().id) {
      trackButtons = (
        <section>
          <div className='track-button track-playlistadd'></div>
          <div className='track-button track-edit'></div>
          <div
            className='track-button track-delete'
            onClick={this.destroyTrack}
          ></div>
        </section>
      );
    } else {
      trackButtons = (
        <section>
          <div className='track-button track-playlistadd'></div>
        </section>
      );
    }
    return(
      <li className='track-index-item group'>
        <div className='track-header'>
          <a href={'#/user/'+user.id+'/tracks'} className='track-poster-image'></a>
          <h2 className='track-header-text'>
            <a href={'#/user/'+user.id+'/tracks'}>
              {user.username}
            </a>
              {' posted '}
            <a href={'#/track/'+track.id}>
              a track
            </a>
          </h2>
        </div>

        <div className='track-body'>
          <img className='track-image' src={track.image}></img>
          <div className='track-body-main group'>
            <div className='track-subheader'>
              <div className='playicon'></div>
              <a
                href={'/#/user/'+user.id+'/tracks'}
                className='track-username'>
                {user.username}
              </a>
              <a
                href={'/#/track/'+track.id}
                className='track-title'>
                {track.title}
              </a>
            </div>
          </div>
          <a href={'/#/track/'+track.id}>
            <div className='waveform'>
              <span className='track-time'>4:33</span>
            </div>
          </a>
          <div className='track-buttons group'>
            {trackButtons}
          </div>
        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
