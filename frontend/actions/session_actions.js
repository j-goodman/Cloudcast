var AppDispatcher = require('../dispatcher.js');

var SessionActions = {
  currentUserReceived: function(currentUser) {
    AppDispatcher.dispatch({
      actionType: 'CURRENT_USER_RECEIVED',
      currentUser: currentUser
    });
  },

  logout: function() {
    AppDispatcher.dispatch({
      actionType: 'LOGOUT'
    });
  }
};

module.exports = SessionActions;
