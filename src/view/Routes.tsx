import Test from "./Test";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./view/Home/index";
import Demo from "./view/Demo/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/test" component={Test} />
    </Switch>
  );
};

export default Routes;
