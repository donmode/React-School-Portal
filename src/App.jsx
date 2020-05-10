import React, { Component } from "react";
import WelcomePage from "./Components/Layouts/Pages/Welcome/WelcomePage";
import Aux from "./HOC/AUX";

class App extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <WelcomePage />
      </Aux>
    );
  }
}

export default App;
