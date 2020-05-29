import React, { Component } from "react";
import store from "../../Redux/Reducers";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.login.token === undefined) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              isOpen: true,
              status: "error",
              contents:
                "Access denied! You are not permitted to access the resource.",
            },
          }}
        />
      );
    }
    return (
      <div className="m-3 p-5">
        <h1>Welcome to Application's Home</h1>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    login: store.logins,
  };
};

export default connect(mapStateToProps)(Home);
