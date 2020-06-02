import Form from "./Form";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/index";
import Demo from "./Demo/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/form" component={Form} />
    </Switch>
  );
};

export default Routes;
