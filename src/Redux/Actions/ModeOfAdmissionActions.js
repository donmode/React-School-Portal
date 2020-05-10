import { GetListBySchool } from "../../Containers/ModeOfAdmissions/ModeOfAdmissionsMethods";

const ListBySchools = (school_program_id) => (dispatch) => {
  return GetListBySchool(school_program_id, dispatch);
};

const ModeOfAdmissionProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetModeOfAdmissionProps", data: obj });
};

export { ListBySchools, ModeOfAdmissionProps };
