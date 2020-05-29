import React from "react";
import Aux from "../../../../HOC/AUX";
import GuestNavbar from "../../Commons/Navigations/GuestNavbar";
import { Link } from "react-router-dom";
import Router from "../../../../Router";
import classes from "../../Commons/Navigations/Navigation.module.css";

const Welcome = (props) => {
  const logo = require("../../../../Images/logo62.png");

  return (
    <Aux>
      <GuestNavbar
        logo={{
          id: "logo",
          src: logo,
          alt: "Logo",
          link: "/",
        }}
        navs={{
          home: (
            <Link to="/" className={classes.LinkItem}>
              Home
            </Link>
          ),
          register: (
            <Link to="/register" className={classes.LinkItem}>
              Register
            </Link>
          ),
          login: (
            <Link to="/login" className={classes.LinkItem}>
              Login
            </Link>
          ),
          logout: (
            <Link to="/logout" className={classes.LinkItem}>
              Logout
            </Link>
          ),
        }}
        login={props.login}
      />
      <Router />
    </Aux>
  );
};

export default Welcome;
