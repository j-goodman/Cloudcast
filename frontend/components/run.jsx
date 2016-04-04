var React = require('react');
var ReactDOM = require('react-dom');

var Homebar = require('./homebar.jsx');

Run = React.createClass({
    render: function () {
      return(
        <div id='cloudcast'>
          <div className='content-main'>
            <Homebar />
            {this.props.children}
          </div>
        </div>
      );
    }
});

module.exports = Run;
