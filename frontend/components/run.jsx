var React = require('react');
var ReactDOM = require('react-dom');

var TrackIndex = require('./tracks/index.jsx');

Run = React.createClass({
    render: function () {
      return(
        <div id='cloudcast'>
          <div className='content-main'>
            <TrackIndex />
          </div>
        </div>
      );
    }
});

module.exports = Run;
