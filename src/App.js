import React from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import './index.css';
import EqDisplay from './EqDisplay';
import Start from './Start';


export default function App(props) {

  return (
      <BrowserRouter basename={window.location.pathname || ''}>
        <div>
          <Route exact path="/" component={withRouter(Start)} />
          <Route path="/solve" component={withRouter(EqDisplay)}/>
        </div>
     </BrowserRouter>
  )

}