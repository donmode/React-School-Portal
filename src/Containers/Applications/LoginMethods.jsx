import Axios from "axios";
// import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const Login = (data, dispatch) => {
  return Axios.post(endpoint_url_base + `users/login`, data, {
    headers: { Authorization: `Bearer ${client_token}` },
  })
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          return dispatch({
            type: "LoginsSuccess",
            data: res.payload,
          });
        } else {
          return dispatch({
            type: "LoginsError",
            data: res.payload,
          });
        }
      }
    })
    .catch((err) => {
      console.log("errrrr::::::::::: with error: ", err);
      dispatch({ type: "LoginsFailed", data: err });
    });
};

export { Login };
