var Dispatcher = require('../dispatcher.js');

var SeriesActions = {
  receiveSingleSeries: function (series) {
    Dispatcher.dispatch({
      actionType: "SERIES_RECEIVED",
      series: series
    });
  },
};

module.exports = SeriesActions;
