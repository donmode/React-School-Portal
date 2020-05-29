import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const formatNavs = (navs) => {
  let arr = [];
  let counter = 1;
  for (var i in navs) {
    arr.push(<li key={counter}>{navs[i]}</li>);
    counter++;
  }
  return arr;
};
const GuestNavbar = (props) => {
  let loggedIn = "";
  if (props.login.token !== undefined) {
    delete props.navs.login;
    delete props.navs.register;
  } else {
    delete props.navs.logout;
  }

  return (
    <nav className={classes.Nav}>
      <Link to={props.logo.link}>
        <img
          className="img-fluid rounded"
          id={props.logo.id || ""}
          src={props.logo.src || ""}
          alt={props.logo.alt || ""}
        ></img>
      </Link>
      <ul className={classes.Navlink}>{formatNavs(props.navs)}</ul>
    </nav>
  );
};

export default GuestNavbar;
