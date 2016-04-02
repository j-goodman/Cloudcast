var React = require('react');
var TrackStore = require('../../stores/track.js');
var ApiUtil = require('../../util/api_util.js');
var TrackIndexItem = require('../tracks/index_item.jsx');

var UserIndex = React.createClass({
	getInitialState: function () {
		return { tracks: TrackStore.getByUser(this.props.user.id) };
	},

	_onChange: function () {
		this.setState({ tracks: TrackStore.getByUser(this.props.user.id) });
	},

	componentDidMount: function () {
		this.trackListener = TrackStore.addListener(this._onChange);
		ApiUtil.fetchAllTracks();
	},

	componentWillUnmount: function () {
		this.trackListener.remove();
	},

	render: function () {
		return (
			<main className='user-detail-index group'>
				<div className='index-page-main'>
					<ul className='track-list'>
						{this.state.tracks.map(function (track) {
							return <TrackIndexItem key={track.id}
							track={track} />;
						})}
					</ul>
				</div>
			</main>
		);
	}
});

module.exports = UserIndex;
