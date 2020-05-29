import React from "react";
import Aux from "../../HOC/AUX";
import classes from "./Forms.module.css";

// const validateEmail = (email) => {
//   let validate_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!validate_email.test(String(email).toLowerCase())) {
//     return false;
//   } else {
//     return true;
//   }
// };

const LoginForm = (props) => {
  return (
    <Aux>
      <div className="form-group">
        <label className={classes.Label} htmlFor="username">
          Username
        </label>
        <input
          className="col-sm-12 col-md-12"
          type="text"
          name="username"
          id="username"
          placeholder="Enter your first name"
          value={props.username}
          onChange={props.handleChange}
          aria-describedby="usernameHelp"
          required="required"
        />

        <small id="usernameHelp" className="form-text text-muted">
          Kindly enter your username or email address
        </small>
      </div>

      <div className="form-group">
        <label className={classes.Label} htmlFor="password">
          Password
        </label>
        <input
          className="col-sm-12 col-md-12 form-control"
          type="password"
          name="password"
          id="password"
          value={props.password}
          onChange={props.handleChange}
          required="required"
          aria-describedby="passwordHelp"
        />
        <small id="passwordHelp" className="form-text text-muted">
          Kindly enter your password
        </small>
      </div>
    </Aux>
  );
};

export default LoginForm;
