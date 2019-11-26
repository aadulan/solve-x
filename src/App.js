import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import EqDisplay from './EqDisplay';


export default function App(props) {

  return (
    // <Router>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path="/" component={EqDisplay} />
      </BrowserRouter>
    // </Router>
  )

}