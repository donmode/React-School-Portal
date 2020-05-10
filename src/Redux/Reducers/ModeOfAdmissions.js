const initialModeOfAdmissionsListState = {
  modeOfAdmissionsLists: [],
};

const ModeOfAdmissionsListReducer = function (
  state = initialModeOfAdmissionsListState,
  action
) {
  switch (action.type) {
    case "ModeOfAdmissionsListSuccess":
      return Object.assign({}, state, {
        modeOfAdmissionsLists: action.data,
      });
    case "SetModeOfAdmissionProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default ModeOfAdmissionsListReducer;
