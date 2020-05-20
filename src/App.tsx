import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Routes} />
    </Router>
  );
};

export default App;
