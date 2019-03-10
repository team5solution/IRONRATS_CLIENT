import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
