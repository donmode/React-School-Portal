import { StoreApplication } from "../../Containers/Applications/ApplicationsMethods";

const Store = (data) => (dispatch) => {
  return StoreApplication(data, dispatch);
};

const ApplicationProps = (obj) => (dispatch) => {
  return dispatch({ type: "SetApplicationProps", data: obj });
};

export { Store, ApplicationProps };
