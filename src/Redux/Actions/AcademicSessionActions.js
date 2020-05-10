import { GetList } from "../../Containers/AcademicSessions/AcademicSessionsMethods";

const Lists = () => (dispatch) => {
  return GetList(dispatch);
};

const AcademicSessionProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetAcademicSessionProps", data: obj });
};

export { Lists, AcademicSessionProps };
