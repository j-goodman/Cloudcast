var React = require('react');
var UserStore = require('../../stores/user.js');
var SessionStore = require('../../stores/session.js');
var ApiUtil = require('../../util/api_util.js');

var SeriesIndexItem = require('../series/series_index_item.jsx');

var UserIndex = React.createClass({
	getInitialState: function () {
		return { tracks: null, user: null };
	},

	_onChange: function () {
		this.setState({ user: UserStore.getUser() });
		this.setState({ tracks: this.state.user.tracks });
	},

	componentDidMount: function () {
    this.userListener = UserStore.addListener(this._onChange);
    ApiUtil.fetchUser(this.props.params.id);
	},

	componentWillUnmount: function () {
    this.userListener.remove();
	},

	render: function () {
    var user = this.state.user;
    var tracks = this.state.tracks;
    if (!user || !tracks) {
      return (<main></main>);
    } else {
      var button;
      if (SessionStore.currentUser().id === user.id) {
        button = (
          <a href="#" className='new-playlist-button'>New Show</a>
        );
      } else {
        button = ( <span></span> );
      }
  		return (
  			<main className='user-detail-index group'>
  				<div className='index-page-main'>
  					{button}
  				</div>
          <section>
            <ul className='series-list'>
              {user.series.map(function (series) {
                return <SeriesIndexItem
                  key={series.id}
                  seriesId={series.id}/>;
              })}
            </ul>
          </section>
  			</main>
		);}
	}
});

module.exports = UserIndex;
