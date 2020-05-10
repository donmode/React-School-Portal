import React from "react";
import Aux from "../../../../HOC/AUX";
import GuestNavbar from "../../Commons/Navigations/GuestNavbar";
import { Link } from "react-router-dom";
import Router from "../../../../Router";
import classes from "../../Commons/Navigations/Navigation.module.css";

const welcome = (props) => {
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
        navs={[
          <Link to="/" className={classes.LinkItem}>
            Home
          </Link>,
          <Link to="/register" className={classes.LinkItem}>
            Register
          </Link>,
        ]}
      />
      <Router />
    </Aux>
  );
};

export default welcome;
