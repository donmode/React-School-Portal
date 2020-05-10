const initialApplicationsListState = {
  applicationsLists: [],
};

const ApplicationsListReducer = function (
  state = initialApplicationsListState,
  action
) {
  switch (action.type) {
    case "ApplicationsListSuccess":
      return Object.assign({}, state, {
        applicationsLists: action.data,
      });
    case "StoreApplicationsSuccess":
      const storeResult = action.data;
      return Object.assign({}, state, storeResult);
    case "SetApplicationProps":
      const setResult = action.data;
      return Object.assign({}, state, setResult);

    default:
      return state;
  }
};

export default ApplicationsListReducer;
