const initialApplicationSettingsListState = {};

const ApplicationSettingsListReducer = function (
  state = initialApplicationSettingsListState,
  action
) {
  const result = action.data;
  switch (action.type) {
    case "ApplicationSettingsByNameSuccess":
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default ApplicationSettingsListReducer;
