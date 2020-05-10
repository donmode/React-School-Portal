const initialDepartmentsListState = {
  departmentsLists: {},
};

const DepartmentsListReducer = function (
  state = initialDepartmentsListState,
  action
) {
  switch (action.type) {
    case "DepartmentsListSuccess":
      return Object.assign({}, state, {
        departmentsLists: Object.assign({}, state.departmentsLists, {
          [action.key]: action.data,
        }),
      });
    case "SetDepartmentProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default DepartmentsListReducer;
