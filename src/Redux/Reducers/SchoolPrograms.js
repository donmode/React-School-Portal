const initialSchoolProgramsListState = {
  schoolProgramsLists: [],
};

const SchoolProgramsListReducer = function (
  state = initialSchoolProgramsListState,
  action
) {
  switch (action.type) {
    case "SchoolProgramsListSuccess":
      return Object.assign({}, state, {
        schoolProgramsLists: action.data,
      });
    case "SetSchoolProgramProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default SchoolProgramsListReducer;
