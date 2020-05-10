const initialFacultiesListState = {
  facultiesLists: {},
};

const FacultiesListReducer = function (
  state = initialFacultiesListState,
  action
) {
  switch (action.type) {
    case "FacultiesListSuccess":
      return Object.assign({}, state, {
        facultiesLists: action.data,
      });
    case "SetFacultyProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default FacultiesListReducer;
