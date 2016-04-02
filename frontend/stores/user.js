var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher.js');

var UserStore = new Store(Dispatcher);

var _user = null;

var resetUser = function (user) {
	_user = user;
};

UserStore.getUser = function () {
  return _user;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case 'USER_RECEIVED':
      resetUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
