import Axios from "axios";
import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const GetListBySchoolDepartment = (
  key,
  school_program_id,
  department_id,
  dispatch
) => {
  return Axios.get(
    endpoint_url_base +
      `pos/list/application?school_program_id=${school_program_id}&department_id=${department_id}`,
    {
      headers: { Authorization: `Bearer ${client_token}` },
    }
  )
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          const result = formatObjectsToArray(res.payload, "id", "pos_name");
          return dispatch({
            type: "PosListSuccess",
            data: result,
            key: key,
          });
        } else {
          return dispatch({
            type: "PosListError",
            data: false,
            key: key,
          });
        }
      }
    })
    .catch((err) => dispatch({ type: "PosListFailed", data: err, key: key }));
};

export { GetListBySchoolDepartment };
