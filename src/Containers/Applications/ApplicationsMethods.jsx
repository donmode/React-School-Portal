import Axios from "axios";
// import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const StoreApplication = (data, dispatch) => {
  return Axios.post(endpoint_url_base + `applications/create`, data, {
    headers: { Authorization: `Bearer ${client_token}` },
  })
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          return dispatch({
            type: "StoreApplicationsSuccess",
            data: res.payload.message,
          });
        } else {
          return dispatch({
            type: "StoreApplicationsError",
            data: res.payload.message,
          });
        }
      }
    })
    .catch((err) => {
      console.log("errrrr::::::::::: ", err);
      dispatch({ type: "StoreApplicationsFailed", data: err });
    });
};

export { StoreApplication };
