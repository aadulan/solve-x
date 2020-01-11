import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import EqDisplay from './EqDisplay';
import Start from './Start';

export default function App(props) {

  return (
    // <Router>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path="/" component={Start} />
        <Route exact path="/solve" component={EqDisplay}/>
      </BrowserRouter>
    // </Router>
  )

}