import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { FitFactory } from "./components/FitFactory"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FitFactory />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


