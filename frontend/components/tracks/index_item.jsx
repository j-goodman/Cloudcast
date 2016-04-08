var React = require('react');
var SessionStore = require('../../stores/session.js');
var ApiUtil = require('../../util/api_util.js');
var TrackActions = require('../../actions/track_actions.js');

var IndexItem = React.createClass({
  getInitialState: function () {
		return { track: null, playing: false, duration: 0, audioTrack: null, completion: 0 };
	},

  stringifyTime: function (seconds) {
    var hrs = 0; var min = 0; var sec = seconds;
    while (sec > 59) { min ++; sec-=60; }
    while (min > 59) { hrs ++; min-=-60; }
    if (sec > 9) { sec = sec.toString(); }
    else { sec = ('0'+sec.toString()); }
    if (hrs > 0) {
      if (min > 9) { min = min.toString(); }
      else { min = ('0'+min.toString()); }
      return hrs+':'+min+':'+sec;
    } else {
      return min+':'+sec;
    }
  },

  componentDidMount: function () {
    var audio = this.audioTag();
    audio.addEventListener('loadedmetadata', this._mediaLoaded);
    this.state.interval = setInterval(this.tick, 450);
  },

  tick: function () {
    if (this.state.playing) {
      var time = this.audioTag().currentTime;
      var duration = this.audioTag().duration;
      this.setState({completion: time/duration});
    }
  },

  componentWillUnmount: function () {
    clearInterval(this.state.interval);
    this.pauseTrack();
  },

  destroyTrack: function () {
    ApiUtil.destroyTrack(this.props.track.id, TrackActions.deleteTrack.bind(null, this.props.track.id));
  },

  audioTag: function () {
    var audio = (document.getElementById('trackAudio'+this.props.track.id));
    if (audio) {
      audio.addEventListener('ended', this.endOfTrack);
      return audio;
    }
  },

  _mediaLoaded: function () {
    var audioTrack = this.audioTag();
    this.setState({duration: Math.floor(audioTrack.duration)});
    audioTrack.addEventListener('ended', this.pauseTrack);
  },

  playTrack: function () {
    this.audioTag().play();
    this.setState({playing: true});
  },

  pauseTrack: function () {
    this.audioTag().pause();
    this.setState({playing: false});
  },

  endOfTrack: function () {
    this.audioTag().pause();
    this.setState({playing: false, completion: 1});
  },

  seekByClick: function (e) {
    if (!this.state.playing) {
      this.playTrack();
    }
    var element = document.getElementById('track-rectangle');
    var rect = element.getBoundingClientRect();
    var selected = ((e.pageX-rect.left)/394);
    this.trackSeek(selected);
  },

  trackSeek: function (decimal) {
    if (this.audioTag()) {
      var targetSec = Math.floor(this.audioTag().duration*decimal);
      this.audioTag().currentTime = targetSec;
    }
  },

  render: function () {
    var trackTimer;
    if (this.audioTag() && (this.audioTag().currentTime === 0 || this.audioTag().currentTime > this.audioTag().duration-1)) {
      trackTimer = (<div></div>);
    } else if (this.audioTag()) {
      trackTimer = (<div className='track-time-left'>{this.stringifyTime(Math.round(this.audioTag().currentTime))}</div>);
    }
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
    var playerpauser;
    if (this.state.playing === false) {
      playerpauser = (<div className='playicon' onClick={this.playTrack}></div>);
    } else {
      playerpauser =(<div className='pauseicon' onClick={this.pauseTrack}></div>);
    }
    var waveStyle = {left: (216+Math.floor(394*this.state.completion)+'px')};
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
              {playerpauser}
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

          <div className='waveform-oreo' style={waveStyle} />
          <div
            className='waveform'
            id='track-rectangle'
            onClick={this.seekByClick}
          >
            <audio src={this.props.track.audio} id={'trackAudio'+this.props.track.id} />
            <div className='track-time'>{this.stringifyTime(this.state.duration)}</div>
            {trackTimer}
          </div>
          <div className='track-buttons group'>
            {trackButtons}
          </div>
        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
