var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');

var SeriesStore = new Store(Dispatcher);

var _series = {};

var resetSeries = function (series) {
  _series = {};
  series.forEach(function (series) {
    _series[series.id] = series;
  });
};

var resetSeries = function (series) {
  _series[series.id] = series;
};

SeriesStore.getSeries = function (id) {
	return _series[id];
};

SeriesStore.all = function () {
  var series = [];
  for (var id in _series) {
    series.push(_series[id]);
  }
  return series;
};

SeriesStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'SERIES_RECEIVED':
      resetSeries(payload.series);
      SeriesStore.__emitChange();
      break;
  }
};

module.exports = SeriesStore;
