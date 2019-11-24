import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import EqDisplay from './EqDisplay';
import Calculator from './Calculator'


export default function App(props) {

  return (
    // <Router>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path="/" component={Calculator} />
      </BrowserRouter>
    // </Router>
  )

}