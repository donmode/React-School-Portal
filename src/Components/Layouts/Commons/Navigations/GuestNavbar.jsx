import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const GuestNavbar = (props) => {
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
      <ul className={classes.Navlink}>
        {props.navs.map((nav, index) => (
          <li key={index + 1}>{nav}</li>
        ))}
      </ul>
    </nav>
  );
};

export default GuestNavbar;
