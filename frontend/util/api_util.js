var TrackActions = require('../actions/track_actions.js');

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
      success: function (pokemon) {
        TrackActions.recieveSingleTrack(track);
        callback && callback(track.id);
      }
    });
  }
};

module.exports = ApiUtil;
