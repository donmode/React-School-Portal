const initialLogin = {};

const LoginsReducer = function (state = initialLogin, action) {
  switch (action.type) {
    case "LoginsProps":
      const result = action.data;
      return Object.assign({}, state, result);
    case "LoginsSuccess":
      const storeResult = action.data;
      return Object.assign({}, state, storeResult);
    case "Logout":
      return {};
    case "RemoveLoginProps":
      const temp = state;
      delete temp.password;
      delete temp.username;
      return temp;
    default:
      return state;
  }
};

export default LoginsReducer;
