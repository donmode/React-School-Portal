import { GetList } from "../../Containers/SchoolPrograms/SchoolProgramsMethods";

const Lists = () => (dispatch) => {
  return GetList(dispatch);
};

const SchoolProgramProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetSchoolProgramProps", data: obj });
};

export { Lists, SchoolProgramProps };
