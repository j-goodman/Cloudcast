var React = require('react');
var ReactDOM = require('react-dom');

var Run = require('./components/run');

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Run />, root);
});
