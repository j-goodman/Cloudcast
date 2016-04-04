var React = require('react');
var ApiUtil = require('../../util/api_util.js');
var SessionStore = require('../../stores/session.js');
var UserStore = require('../../stores/user.js');
var TrackIndexItem = require('../tracks/index_item.jsx');
var UserDetailSidebar = require('./user_detail_sidebar.jsx');
var UserDetailIndex = require('./user_detail_index.jsx');

var Link = require('react-router').Link;

var UserDetail = React.createClass({
	getInitialState: function () {
		return { user: null };
	},

  componentDidMount: function () {
		this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUser(this.props.params.id);
  },

  componentWillUnmount: function () {
		this.userListener.remove();
  },

	_onChange: function () {
		this.setState({ user: UserStore.getUser() });
	},

  render: function () {
		if (!this.state.user) {
			return (<main ></main>);
		} else {
			return (
				<main className='user-detail-main'>
					<section className='user-header'>
						<div className='user-avatar'></div>
						<div className='user-header-info'>
							<h1>{this.state.user.username}</h1>
						</div>
					</section>

					<div className='user-detail-tabs'>
						<a href={'#/user/'+this.state.user.id+'/tracks'}>Tracks</a>
						<a href={'#/user/'+this.state.user.id+'/playlists'}>Playlists</a>
						<a href={'#/user/'+this.state.user.id}>Reposts</a>
					</div>

					<section className='user-detail-box'>
            {this.props.children}
						<UserDetailSidebar user={this.state.user}/>
					</section>
				</main>
			);
		}
	}
});

module.exports = UserDetail;
