import React, { Component } from "react";

import Aux from "../../HOC/AUX";
import { Logout as LogUserOut } from "../../Redux/Actions/LoginActions";

import store from "../../Redux/Reducers";

import { Redirect } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    store.dispatch(LogUserOut());
  }

  render() {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

export default Logout;
