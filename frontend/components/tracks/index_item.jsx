var React = require('react');

var IndexItem = React.createClass({
  render: function () {
    return(
      <li>
        <div className='track-header'>
          <div className='track-poster-image'></div>
          <h2 className='track-header-text'>
            {this.props.track.user.username} posted a track.
          </h2>
        </div>

        <div className='track-body'>
          <div className='track-image'></div>
          <div className='track-body-main'>
            <div className='playicon'>▶</div>
            <span className='track-username'>{this.props.track.user.username}</span>
            <span className='track-title'>{this.props.track.title}</span>
          </div>
          <div className='waveform'>
            <span className='track-time'>4:33</span>
          </div>
          <div className='track-buttons'>
            ♥ ↻ ▢ ▼
          </div>
        </div>
      </li>
    );
  }
});

module.exports = IndexItem;
