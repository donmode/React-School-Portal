import Axios from "axios";
import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const GetListBySchool = (school_program_id, dispatch) => {
  return Axios.get(
    endpoint_url_base +
      `mode_of_admissions/list/school?school_program_id=${school_program_id}`,
    {
      headers: { Authorization: `Bearer ${client_token}` },
    }
  )
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          const result = formatObjectsToArray(
            res.payload,
            "id",
            "mode_of_admission"
          );

          return dispatch({
            type: "ModeOfAdmissionsListSuccess",
            data: result,
          });
        } else {
          return dispatch({ type: "ModeOfAdmissionsListError", data: false });
        }
      }
    })
    .catch((err) =>
      dispatch({ type: "ModeOfAdmissionsListFailed", data: err })
    );
};

export { GetListBySchool };
