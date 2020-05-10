import React from "react";
import Aux from "../../HOC/AUX";
import classes from "./Forms.module.css";

const validateEmail = (email) => {
  let validate_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!validate_email.test(String(email).toLowerCase())) {
    return false;
  } else {
    return true;
  }
};

const BasicBiodataForm = (props) => {
  let firstname = "";
  let middlename = "";
  let lastname = "";
  let email = "";
  let confirm_email = "";

  let valid_email = "";
  let valid_confirm_email = "";
  if (props.biodata.hasOwnProperty) {
    const biodata = props.biodata;
    firstname = biodata.firstname || firstname;
    middlename = biodata.middlename || middlename;
    lastname = biodata.lastname || lastname;
    email = biodata.email || email;
    confirm_email = biodata.confirm_email || confirm_email;

    valid_email = email ? validateEmail(email) : "";
    valid_confirm_email = confirm_email ? validateEmail(confirm_email) : "";
  }

  return (
    <Aux>
      <div className="form-group">
        <label className={classes.Label} htmlFor="firstname">
          First Name
        </label>
        <input
          className="col-sm-12 col-md-12"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter your first name"
          value={firstname}
          onChange={props.handleChange}
          aria-describedby="firstnameHelp"
          required="required"
        />
        <small id="firstnameHelp" className="form-text text-muted">
          Kindly enter your first name above
        </small>
      </div>

      <div className="form-group">
        <label className={classes.Label} htmlFor="middlename">
          Middle Name
        </label>
        <input
          className="col-sm-12 col-md-12"
          type="text"
          name="middlename"
          id="middlename"
          placeholder="Enter your middle name"
          value={middlename}
          onChange={props.handleChange}
          aria-describedby="middlenameHelp"
        />
        <small id="middlenameHelp" className="form-text text-muted">
          Kindly enter your middle name above
        </small>
      </div>

      <div className="form-group">
        <label className={classes.Label} htmlFor="lastname">
          Last Name
        </label>
        <input
          className="col-sm-12 col-md-12"
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your last name"
          value={lastname}
          onChange={props.handleChange}
          aria-describedby="lastnameHelp"
          required="required"
        />
        <small id="lastnameHelp" className="form-text text-muted">
          Kindly enter your last name above
        </small>
      </div>

      <div className="form-group">
        <label className={classes.Label} htmlFor="email">
          Email
        </label>
        {valid_email !== "" && valid_email === false ? (
          <small className="text-danger">Invalid Email Address</small>
        ) : (
          ""
        )}
        <input
          className="col-sm-12 col-md-12 form-control"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={props.handleChange}
          aria-describedby="emailHelp"
          required="required"
        />
        <small id="emailHelp" className="form-text text-muted">
          Kindly enter your email address above
        </small>
      </div>

      <div className="form-group">
        <label className={classes.Label} htmlFor="confirm_email">
          Confirm Email
        </label>
        {valid_confirm_email !== "" && valid_confirm_email === false ? (
          <small className="text-danger">
            Invalid Email Address <br></br>
          </small>
        ) : (
          ""
        )}
        {confirm_email !== "" && confirm_email !== email ? (
          <small className="text-danger">
            {" "}
            Ensure this field is same as above{" "}
          </small>
        ) : (
          ""
        )}
        <input
          className="col-sm-12 col-md-12 form-control"
          type="email"
          name="confirm_email"
          id="confirm_email"
          placeholder="Re-Enter your email address"
          value={confirm_email}
          onChange={props.handleChange}
          aria-describedby="confirm_emailHelp"
          required="required"
        />
        <small id="confirm_emailHelp" className="form-text text-muted">
          Kindly Confirm your email address above
        </small>
      </div>
    </Aux>
  );
};

export default BasicBiodataForm;
