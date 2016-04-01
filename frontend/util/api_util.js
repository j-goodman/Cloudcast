var TrackActions = require('../actions/track_actions.js');
var SessionActions = require('../actions/session_actions.js');
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

  createTrack: function (track, callback) {
    $.ajax({
      url: 'api/tracks',
      method: 'POST',
      data: {track: track},
      success: function (track) {
        TrackActions.recieveSingleTrack(track);
        callback && callback(track.id);
      }
    });
  },

  createUser: function (credentials, callback) {
    $.ajax({
      type: 'POST',
      url: '/api/user',
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
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
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
      }
    });
  },

  fetchCurrentUser: function(completion) {
    $.ajax({
      type: 'GET',
      url: '/api/session',
      dataType: 'json',
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  }
};

module.exports = ApiUtil;
