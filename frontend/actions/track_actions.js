var Dispatcher = require('../dispatcher.js');

var TrackActions = {
  receiveAllTracks: function (tracks) {
    Dispatcher.dispatch({
      actionType: "TRACKS_RECEIVED",
      tracks: tracks
    });
  },

  receiveSingleTrack: function (track) {
    Dispatcher.dispatch({
      actionType: "TRACK_RECEIVED",
      track: track
    });
  },

  receiveTracksByUser: function (tracks) {
    Dispatcher.dispatch({
      actionType: "USER_TRACKS_RECEIVED",
      tracks: tracks
    });
  }
};

module.exports = TrackActions;
