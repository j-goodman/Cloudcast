var React = require('react');
var TrackStore = require('../../stores/track.js');
var UserStore = require('../../stores/user.js');
var ApiUtil = require('../../util/api_util.js');
var TrackIndexItem = require('../tracks/index_item.jsx');

var UserIndex = React.createClass({
	getInitialState: function () {
		return { tracks: null, user: null };
	},

	_onChange: function () {
		this.setState({ user: UserStore.getUser() });
		this.setState({ tracks: TrackStore.all() });
	},

	componentDidMount: function () {
		this.trackListener = TrackStore.addListener(this._onChange);
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUser(this.props.params.id);
    ApiUtil.fetchTracksByUser(this.props.params.id);
	},

	componentWillUnmount: function () {
		this.trackListener.remove();
    this.userListener.remove();
	},

	render: function () {
    var user = this.state.user;
    var tracks = this.state.tracks;
    if (!user || !tracks) {
      return (<main></main>);
    } else {
  		return (
  			<main className='user-detail-index group'>
          <div className='user-track-tab'>Tracks</div>
  				<div className='index-page-main'>
  					<ul className='track-list'>
  						{tracks.map(function (track) {
                if (track) {
    							return <TrackIndexItem key={track.id}
    							track={track} user={user} />;
                }
  						})}
  					</ul>
  				</div>
  			</main>
		);}
	}
});

module.exports = UserIndex;
