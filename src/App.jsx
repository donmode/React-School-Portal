import React, { Component } from "react";
import WelcomePage from "./Components/Layouts/Pages/Welcome/WelcomePage";
import Aux from "./HOC/AUX";

import { connect } from "react-redux";
import store from "./Redux/Reducers";

class App extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <WelcomePage login={this.props.login} />
      </Aux>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    login: store.logins,
  };
};

export default connect(mapStateToProps)(App);
