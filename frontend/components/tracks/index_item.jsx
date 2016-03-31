var React = require('react');

var IndexItem = React.createClass({
  render: function () {
    return(
      <li className='track-index-item group'>
        <div className='track-header'>
          <div className='track-poster-image'></div>
          <h2 className='track-header-text'>
            {this.props.track.user.username} posted a track
          </h2>
        </div>

        <div className='track-body'>
          <div className='track-image'></div>
          <div className='track-body-main group'>
            <div className='track-subheader'>
              <div className='playicon'></div>
              <span className='track-username'>{this.props.track.description}</span>
              <span className='track-title'>{this.props.track.title}</span>
            </div>
          </div>
          <div className='waveform'>
            <span className='track-time'>4:33</span>
          </div>
          <div className='track-buttons group'>
            <div className='track-button track-like'></div>
            <div className='track-button track-repost'></div>
            <div className='track-button track-playlistadd'></div>
            <div className='track-button track-share'></div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
