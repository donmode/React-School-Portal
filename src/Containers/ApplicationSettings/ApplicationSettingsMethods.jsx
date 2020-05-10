import Axios from "axios";
import { formatObjectsToArray } from "../../Utilities/utils";

const client_token = process.env.REACT_APP_CLIENT_TOKEN;
const endpoint_url_base = process.env.REACT_APP_ENDPOINT_URL_BASE;

const GetApplicationSettingByName = (name, dispatch) => {
  return Axios.get(
    endpoint_url_base + `application_settings/list/by_name?name=${name}`,
    {
      headers: { Authorization: `Bearer ${client_token}` },
    }
  )
    .then((res) => {
      if (res.status === 200) {
        res = res.data;
        if (res.success === true) {
          const result = formatObjectsToArray(res.payload, "name", "value");
          return dispatch({
            type: "ApplicationSettingsByNameSuccess",
            data: result,
          });
        } else {
          return dispatch({
            type: "ApplicationSettingsByNameError",
            data: false,
          });
        }
      }
    })
    .catch((err) =>
      dispatch({ type: "ApplicationSettingsByNameFailed", data: err })
    );
};

export { GetApplicationSettingByName };
