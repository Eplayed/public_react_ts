import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from './About'
import MyMenu from '../components/Menu/index'

const Routes = () => {
  return (
    <>
    <MyMenu></MyMenu>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
    </Switch>
    </>
  );
};

export default Routes;