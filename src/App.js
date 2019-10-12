import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import EqDisplay from './EqDisplay';


export default function App(props) {

  return (
    <Router>
        <Route exact path="/" component={EqDisplay} />
    </Router>
  )

}