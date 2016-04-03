var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var TrackStore = require('../../stores/track.js');
var TrackIndexItem = require('../tracks/index_item.jsx');

var Link = require('react-router').Link;

var TrackDetail = React.createClass({
	getInitialState: function () {
		return { track: null };
	},

  componentDidMount: function () {
		this.trackListener = TrackStore.addListener(this._onChange);
    ApiUtil.fetchSingleTrack(this.props.params.id);
  },

  componentWillUnmount: function () {
		this.trackListener.remove();
  },

	_onChange: function () {
		this.setState({ track: TrackStore.getTrack() });
	},

  render: function () {
		if (!this.state.track) {
			return (<main ></main>);
		} else {
			return (
				<main className='user-detail-main'>
					<section className='user-header'>
						<div className='user-avatar'></div>
						<div className='user-header-info'>
							<h2>{this.state.track.user}</h2>
							<h1>{this.state.track.title}</h1>
						</div>
					</section>

					<div className='track-detail-commentbar'>
					</div>

					<section className='user-detail-box'>
						<UserDetailIndex user={this.state.user}/>
						<UserDetailSidebar user={this.state.user}/>
					</section>
				</main>
			);
		}
	}
});

module.exports = TrackDetail;
