var TrackActions = require('../actions/track_actions.js');
var SessionActions = require('../actions/session_actions.js');
var UserActions = require('../actions/user_actions.js');
var SeriesActions = require('../actions/series_actions.js');
var AppDispatcher = require('../dispatcher.js');

var ApiUtil = {
  fetchAllTracks: function () {
    $.ajax({
      url: 'api/tracks',
      success: function (tracks) {
        TrackActions.receiveAllTracks(tracks);
      }
    });
  },

  fetchSingleTrack: function (id) {
    $.ajax({
      url: 'api/tracks/'+id,
      success: function (track) {
        TrackActions.receiveSingleTrack(track);
      }
    });
  },

  fetchSingleSeries: function (id) {
    $.ajax({
      url: 'api/series/'+id,
      success: function (series) {
        SeriesActions.receiveSingleSeries(series);
      }
    });
  },

  fetchUser: function (id) {
    $.ajax({
      url: 'api/users/'+id,
      success: function (user) {
        UserActions.receiveUser(user);
      }
    });
  },

  createTrack: function (track, callback) {
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: {track: track},
      success: function (track) {
        TrackActions.receiveSingleTrack(track);
        callback && callback();
      }
    });
  },

  createUser: function (credentials, callback) {
    $.ajax({
      type: 'POST',
      url: '/api/users',
      dataType: 'json',
      data: {user: credentials},
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      }
    });
  },

  login: function (credentials, callback) {
    $.ajax({
      type: 'POST',
      url: '/api/session',
      dataType: 'json',
      data: {user: credentials},
      success: function(currentUser) {
        if (currentUser.username) {
          SessionActions.currentUserReceived(currentUser);
        }
        callback && callback();
      },
      error: function() {
      }
    });
  },

  logout: function () {
    $.ajax({
      type: 'DELETE',
      url: '/api/session',
      dataType: 'json',
      success: function() {
        SessionActions.logout();
      },
      error: function() {
      }
    });
  },

  fetchCurrentUser: function() {
    $.ajax({
      type: 'GET',
      url: '/api/session',
      dataType: 'json',
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      error: function() {
      }
    });
  }
};

module.exports = ApiUtil;
