import React from "react";
import Aux from "./HOC/AUX";
import { Switch, Route } from "react-router-dom";

import MainContent from "./Components/Layouts/Pages/MainContent";
import Application from "./Containers/Applications/OnlineApplicationContainer";

const router = () => {
  return (
    <Aux>
      <Switch>
        <Route path="/" component={MainContent} exact />
        <Route path="/register" component={Application} exact />
      </Switch>
    </Aux>
  );
};

export default router;
