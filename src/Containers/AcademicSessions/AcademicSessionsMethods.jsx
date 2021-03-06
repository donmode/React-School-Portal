import Axios from "axios";
import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const GetList = (dispatch) => {
  return Axios.get(endpoint_url_base + "academic_sessions/list", {
    headers: { Authorization: `Bearer ${client_token}` },
  })
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          const result = formatObjectsToArray(res.payload, "id", "name");
          return dispatch({
            type: "AcademicSessionsListSuccess",
            data: result,
          });
        } else {
          return dispatch({ type: "AcademicSessionsListError", data: false });
        }
      }
    })
    .catch((err) =>
      dispatch({ type: "AcademicSessionsListFailed", data: err })
    );
};

export { GetList };
