import { GetListBySchoolDepartment } from "../../Containers/Pos/PosMethods";

const ListBySchoolProgramDepartment = (
  key,
  school_program_id,
  department_id
) => (dispatch) => {
  return GetListBySchoolDepartment(
    key,
    school_program_id,
    department_id,
    dispatch
  );
};

const PosProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetPosProps", data: obj });
};

export { ListBySchoolProgramDepartment, PosProps };
