import Axios from "axios";
import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const GetList = (dispatch) => {
  return Axios.get(endpoint_url_base + "faculties/list", {
    headers: { Authorization: `Bearer ${client_token}` },
  })
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          const result = formatObjectsToArray(
            res.payload,
            "id",
            "faculty_name"
          );
          return dispatch({
            type: "FacultiesListSuccess",
            data: result,
          });
        } else {
          return dispatch({ type: "FacultiesListError", data: false });
        }
      }
    })
    .catch((err) => dispatch({ type: "FacultiesListFailed", data: err }));
};

export { GetList };
