var React = require('react');

var IndexItem = React.createClass({
  render: function () {
    return(
      <li className='track-index-item group'>
        <div className='track-header'>
          <a href={'#/user/'+this.props.user.id+'/tracks'} className='track-poster-image'></a>
          <h2 className='track-header-text'>
            <a href={'#/user/'+this.props.user.id+'/tracks'}>{this.props.user.username} posted a track</a>
          </h2>
        </div>


        <div className='track-body'>
          <img className='track-image' src={this.props.track.image}></img>
          <div className='track-body-main group'>
            <div className='track-subheader'>
              <div className='playicon'></div>
              <span className='track-username'>{this.props.track.description}</span>
              <span className='track-title'>{this.props.track.title}</span>
            </div>
          </div>
          <a href={'/#/track/'+this.props.track.id}>
            <div className='waveform'>
              <span className='track-time'>4:33</span>
            </div>
          </a>
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
