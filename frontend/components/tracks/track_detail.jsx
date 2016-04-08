var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var TrackStore = require('../../stores/track.js');
var TrackIndexItem = require('../tracks/index_item.jsx');

var Link = require('react-router').Link;

var TrackDetail = React.createClass({
	getInitialState: function () {
		return { track: null, playing: false, duration: "loading", audioTrack: null, completion: 0 };
	},

  stringifyTime: function (seconds) {
    if (seconds === "loading") {
      return "loading...";
    }
    var hrs = 0; var min = 0; var sec = Math.floor(seconds);
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
		this.trackListener = TrackStore.addListener(this._onChange);
    ApiUtil.fetchSingleTrack(this.props.params.id);
    this.audio = document.getElementById("trackAudio");
    this.state.interval = setInterval(this.tick, 120);
    this.setState({ duration: "loading" });
    if (this.audio) {
      this.setState({ audioTrack: audioTrack });
      this.state.audioTrack.addEventListener('loadedmetadata', this._mediaLoaded);
    }
  },

  componentWillUnmount: function () {
		this.trackListener.remove();
    clearInterval(this.state.interval);
    this.pauseTrack();
  },

  _mediaLoaded: function () {
    var audioTrack = document.getElementById("trackAudio");
    this.setState({ audioTrack: audioTrack });
    this.setState({
      duration: this.state.audioTrack.duration,
      currentTime: this.state.audioTrack.currentTime
    });
  },

  tick: function () {
    if (this.state.playing) {
      var time = this.state.audioTrack.currentTime;
      var duration = this.state.audioTrack.duration;
      this.setState({completion: time/duration});
    }
  },

	_onChange: function () {
		this.setState({ track: TrackStore.getTrack(this.props.params.id) });
    var audioTrack = document.getElementById("trackAudio");
    if (audioTrack) {
      this.setState({ audioTrack: audioTrack });
      this.state.audioTrack.addEventListener('loadedmetadata', this._mediaLoaded);
    }
	},

  playTrack: function () {
    if (this.state.audioTrack) {
      this.state.audioTrack.play();
      this.setState({playing: true});
    }
    this.state.audioTrack.addEventListener('ended', this.endOfTrack);
  },

  seekByClick: function (e) {
    if (!this.state.playing) {
      this.playTrack();
    }
    var element = document.getElementById('track-rectangle');
    var rect = element.getBoundingClientRect();
    var selected = ((e.pageX-rect.left)/560);
    this.trackSeek(selected);
  },

  pauseTrack: function () {
    if (this.state.audioTrack) {
      this.state.audioTrack.pause();
      this.setState({playing: false});
    }
  },

  trackSeek: function (decimal) {
    if (this.state.audioTrack) {
      var targetSec = Math.floor(this.state.audioTrack.duration*decimal);
      this.state.audioTrack.currentTime = targetSec;
    }
  },

  endOfTrack: function () {
    if (this.state.audioTrack) {
      this.state.audioTrack.pause();
      this.setState({playing: false, completion: 1});
    }
  },

  render: function () {
    var trackTimer;
    if (this.state.audioTrack && (this.state.audioTrack.currentTime === 0 || this.state.audioTrack.currentTime > this.state.audioTrack.duration-1)) {
      trackTimer = (<div></div>);
    } else if (this.state.audioTrack) {
      trackTimer = (<div className='track-time-left'>{this.stringifyTime(Math.round(this.state.audioTrack.currentTime))}</div>);
    }
		if (!this.state.track) {
			return (<main ></main>);
		} else {
      var track = this.state.track;
      var playerpauser;
      if (this.state.playing === false) {
        playerpauser = (<div className='playicon track-detail-playicon' onClick={this.playTrack}></div>);
      } else {
        playerpauser =(<div className='pauseicon track-detail-playicon' onClick={this.pauseTrack}></div>);
      }
      var waveStyle = {left: (40+Math.floor(554*this.state.completion)+'px')};
			return (
				<main className='user-detail-main'>
          <audio src={track.audio} id='trackAudio' />
					<section className='track-detail-header'>
            {playerpauser}
            <img className='track-avatar' src={this.state.track.image}></img>
						<div className='track-header-info'>
							<h2><a href={'/#/user/'+track.user.id+'/tracks'}>{track.user.username}</a></h2>
							<h1>{track.title}</h1>
						</div>
            <div className='track-detail-waveform-oreo' style={waveStyle} />
            <div
              className='track-detail-waveform'
              id='track-rectangle'
              onClick={this.seekByClick}
            >
              <div className='track-time'>{this.stringifyTime(this.state.duration)}</div>
              {trackTimer}
            </div>
					</section>

					<section className='track-detail-main'>
            <div className = 'interact-bar'></div>
            <ul className = 'track-info-box group'>
            <section className='track-detail-sidebar'></section>
              <a href={'/#/user/'+track.user.id+'/tracks'}>
                <img className='track-info-user-avatar' src={this.state.track.user.image}></img>
                <li className = 'track-info-username'>{track.user.username}</li>
              </a>
              <li className = 'track-info-description'>{track.description}</li>
            </ul>
					</section>
				</main>
			);
		}
	}
});

module.exports = TrackDetail;
