import { GetList } from "../../Containers/Faculties/FacultiesMethods";

const Lists = () => (dispatch) => {
  return GetList(dispatch);
};

const FacultyProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetFacultyProps", data: obj });
};

export { Lists, FacultyProps };
