var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var TrackStore = require('../../stores/track.js');
var TrackIndexItem = require('../tracks/index_item.jsx');
var CommentForm = require('./comment_form.jsx');

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

  seekByTime: function (seconds) {
		if (!this.state.playing) {
			this.playTrack();
		}
		if (this.state.audioTrack) {
    	this.state.audioTrack.currentTime = seconds;
		}
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

  handleLike: function (e) {
    e.preventDefault();

		var alreadyLiked = false;

		this.state.track.likes.forEach(function(like){
			if (like.user_id === SessionStore.currentUser().id) {
				alreadyLiked = false;
			}
		}.bind(this));

		if (!alreadyLiked) {
			ApiUtil.createLike({
				like: {
					track_id: this.state.track.id
				}
			}, (function (id) {
				ApiUtil.fetchSingleTrack(this.state.track.id);
			}.bind(this))
		);
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
			var commentPositions = [];
			var commentForm;
			if (this.state.audioTrack && SessionStore.currentUser()) {
				commentForm = (
					<CommentForm seconds={this.state.audioTrack.currentTime} track={this.state.track} />
				);
			} else {
				commentForm = (<div></div>);
			}
			var likeButton = "";
			if (SessionStore.currentUser()) {
				likeButton = (
					<input className="like-button" type="submit" value="Like" />
				)
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
						{commentForm}
            <div className='track-detail-waveform-oreo' style={waveStyle} />
            <div
              className='track-detail-waveform'
              id='track-rectangle'
              onClick={this.seekByClick}
            >
              <div className='track-time'>{this.stringifyTime(this.state.duration)}</div>
              {trackTimer}
            </div>
						<section className="track-comments-wrapper">
							{track.comments.map(function (comment) {
								var commentStyle = {left: (Math.floor(554*(comment.seconds/this.state.duration))+'px'), top: 0};
								commentPositions.forEach(function(otherComment){
									var diff = parseInt(commentStyle.left) - parseInt(otherComment.left);
									if (diff >= 0 && diff < 15) {
												commentStyle.top = (15-diff)/2+"px"
											}
								});
								commentPositions.push(commentStyle);
								var commentPreview;
								if (comment.body.length > 120) {
									commentPreview = comment.body.slice(0,117)+"...";
								} else {
									commentPreview = comment.body;
								}
								return (
									<li key={comment.id} seconds={comment.seconds} style={commentStyle} className="track-comment">
										<a href={'/#/user/'+comment.user_id+'/tracks'}><img className="track-comment-image" src={comment.image}></img></a>
										<article className="track-comment-body">{commentPreview}</article>
									</li>
								)
							}.bind(this))}
						</section>
					</section>

					<section className='track-detail-main'>
						<section className='track-detail-leftbar'>
	            <div className = 'interact-bar'></div>
	            <ul className = 'track-info-box group'>
	            <section className='track-detail-mainbox'></section>
	              <a href={'/#/user/'+track.user.id+'/tracks'}>
	                <img className='track-info-user-avatar' src={this.state.track.user.image}></img>
	                <li className = 'track-info-username'>{track.user.username}</li>
	              </a>
	              <li className = 'track-info-description'>{track.description}</li>
	            </ul>
							<section className = "comments-main-wrapper">
								{track.comments.map(function (comment) {
									var commentTime = Math.floor(comment.seconds/60)+":"+(comment.seconds%60);
									if (comment.seconds%60 < 10) {
										commentTime = Math.floor(comment.seconds/60)+":0"+(comment.seconds%60);
									}
									return (
										<ul className="comment-main" key={comment.id}>
											<a href={'/#/user/'+comment.user_id+'/tracks'}><img className="comment-main-avatar" src={comment.image}></img></a>
											<li className="comment-main-userinfo"><a href={'/#/user/'+comment.user_id+'/tracks'}><b className="blue">{comment.username}</b></a>
											{"  says at  "}
											<b className="orange-button" onClick={this.seekByTime.bind(this, comment.seconds)}>{commentTime}</b></li>
											<li className="comment-main-body">{comment.body}</li>
										</ul>
									)
								}.bind(this))}
							</section>
						</section>
						<section className='track-detail-sidebar'>
							<ul className="likes-box">
								{track.likes.map(function (like) {
									return (
										<ul className="like-list-item" key={like.id}>
											<a href={'/#/user/'+like.user_id+'/tracks'}><img className="like-avatar" src={like.image}></img></a>
											<li className="like-notification"><a href={'/#/user/'+like.user_id+'/tracks'}><b className="orange">{like.username}</b></a> likes this episode</li>
										</ul>
									)
								}.bind(this))}
								<form onSubmit={this.handleLike}>
									{likeButton}
								</form>
							</ul>
						</section>
					</section>
				</main>
			);
		}
	}
});

module.exports = TrackDetail;
