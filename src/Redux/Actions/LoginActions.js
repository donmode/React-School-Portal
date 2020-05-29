import { Login as ConfirmLogin } from "../../Containers/Applications/LoginMethods";

const Login = (data) => (dispatch) => {
  return ConfirmLogin(data, dispatch);
};

const RemoveLoginProps = () => (dispatch) => {
  return dispatch({ type: "RemoveLoginProps" });
};

const Logout = () => (dispatch) => {
  return dispatch({ type: "Logout" });
};

const LoginProps = (obj) => (dispatch) => {
  return dispatch({ type: "LoginsProps", data: obj });
};

export { LoginProps, Login, Logout, RemoveLoginProps };
