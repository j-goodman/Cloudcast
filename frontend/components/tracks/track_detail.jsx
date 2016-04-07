var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var TrackStore = require('../../stores/track.js');
var TrackIndexItem = require('../tracks/index_item.jsx');

var Link = require('react-router').Link;

var TrackDetail = React.createClass({
	getInitialState: function () {
		return { track: null, playing: false };
	},

  componentDidMount: function () {
		this.trackListener = TrackStore.addListener(this._onChange);
    ApiUtil.fetchSingleTrack(this.props.params.id);
    this.audio = document.getElementById("trackAudio");
  },

  componentWillUnmount: function () {
		this.trackListener.remove();
  },

	_onChange: function () {
		this.setState({ track: TrackStore.getTrack(this.props.params.id) });
    this.audio = document.getElementById("trackAudio");
	},

  playTrack: function () {
    if (this.audio) {
      this.audio.play();
      this.setState({playing: true});
    }
  },

  pauseTrack: function () {
    if (this.audio) {
      this.audio.pause();
      this.setState({playing: false});
    }
  },

  render: function () {
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
            <div className='track-detail-waveform'>
              <div className='track-time'>4:33</div>
            </div>
					</section>

					<section className='track-detail-main'>
            <div className = 'interact-bar'></div>
            <ul className = 'track-info-box group'>
            <section className='track-detail-sidebar'></section>
              <a href={'/#/user/'+track.user.id+'/tracks'}>
                <li className = 'track-info-user-avatar' />
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
