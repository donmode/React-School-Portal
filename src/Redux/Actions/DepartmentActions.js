import { GetListByFaculty } from "../../Containers/Departments/DepartmentsMethods";

const ListByFaculties = (key, faculty_id) => (dispatch) => {
  return GetListByFaculty(key, faculty_id, dispatch);
};

const DepartmentProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetDepartmentProps", data: obj });
};

export { ListByFaculties, DepartmentProps };
