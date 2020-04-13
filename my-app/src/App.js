import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Work from './pages/Work';
import Info from './pages/Info';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/work" component={Work} />
        <Route path="/info" component={Info} />
      </Router>
      
    </div>
  );
}

export default App;
