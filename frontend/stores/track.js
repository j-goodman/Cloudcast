var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');

var TrackStore = new Store(Dispatcher);

var _tracks = {};

var resetTracks = function (tracks) {
  _tracks = {};
  tracks.forEach(function (track) {
    _tracks[track.id] = track;
  });
};

var resetTrack = function (track) {
  _track[track.id] = track;
};

TrackStore.all = function () {
  var tracks = [];
  for (var id in _tracks) {
    tracks.push(_tracks[id]);
  }
  return tracks;
};

TrackStore.getByUser = function (userId) {
	var tracks = [];
  for (var id in _tracks) {
		if (_tracks[id].user.id === userId) {
    	tracks.push(_tracks[id]);
		}
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
