import React from "react";
import Aux from "./HOC/AUX";
import { Switch, Route } from "react-router-dom";

import MainContent from "./Components/Layouts/Pages/MainContent";
import Application from "./Containers/Applications/OnlineApplicationContainer";
import Login from "./Containers/Applications/Login";
import Logout from "./Containers/Applications/Logout";
import Home from "./Containers/Applications/Home";

const router = () => {
  return (
    <Aux>
      <Switch>
        <Route path="/" component={MainContent} exact />
        <Route path="/register" component={Application} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/application-home" component={Home} exact />
      </Switch>
    </Aux>
  );
};

export default router;
