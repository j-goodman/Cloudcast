var Dispatcher = require('../dispatcher.js');

var UserActions = {
	receiveAllUsers: function (users) {
		Dispatcher.dispatch({
			actionType: "USERS_RECEIVED",
			users: users
		});
	},

  receiveUser: function (user) {
    Dispatcher.dispatch({
      actionType: "USER_RECEIVED",
	    user: user
    });
  }
};

module.exports = UserActions;
