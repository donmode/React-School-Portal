import Axios from "axios";
import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const GetListByFaculty = (key, faculty_id, dispatch) => {
  return Axios.get(
    endpoint_url_base + `departments/list/faculty?faculty_id=${faculty_id}`,
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
            "department_name"
          );

          return dispatch({
            type: "DepartmentsListSuccess",
            data: result,
            key: key,
          });
        } else {
          return dispatch({
            type: "DepartmentsListError",
            data: false,
            key: key,
          });
        }
      }
    })
    .catch((err) =>
      dispatch({ type: "DepartmentsListFailed", data: err, key: key })
    );
};

export { GetListByFaculty };
