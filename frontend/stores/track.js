var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');

var TrackStore = new Store(Dispatcher);

var _tracks = {};

var resetTracks = function (tracks) {
  _tracks = {};
  tracks.forEach(function (track) {
    console.log(track.id);
    _tracks[track.id] = track;
  });
};

var resetTrack = function (track) {
  _track[track.id] = track;
};

TrackStore.all = function () {
  var tracks = [];
  for (var id in _tracks) {
    // console.log(_tracks[id]);
    tracks.push(_tracks[id]);
  }
  return tracks;
};

TrackStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'TRACKS_RECEIVED':
      resetTracks(payload.tracks);
      TrackStore.__emitChange();
      break;
    case 'TRACK_RECEIVED':
      resetTrack(payload.track);
      TrackStore.__emitChange();
      break;
  }
};

module.exports = TrackStore;
