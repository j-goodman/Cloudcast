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
      actionType: "POKEMON_RECEIVE",
      track: track
    });
  }
};

module.exports = TrackActions;
