import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Routes from "./view/Routes";
import './App.css';


const App: React.FC = () => {
  return (
     <Router>
      <Routes />
     </Router>
  );
}

export default App;
