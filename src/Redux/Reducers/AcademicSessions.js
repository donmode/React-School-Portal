const initialAcademicSessionsListState = {
  academicSessionsLists: [],
};

const AcademicSessionsListReducer = function (
  state = initialAcademicSessionsListState,
  action
) {
  switch (action.type) {
    case "AcademicSessionsListSuccess":
      return Object.assign({}, state, {
        academicSessionsLists: action.data,
      });
    case "SetAcademicSessionProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default AcademicSessionsListReducer;
