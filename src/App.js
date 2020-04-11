import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import './index.css';
import EqDisplay from './EqDisplay';
import Start from './Start';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e88e5",
    },
  },
});


export default function App(props) {
  var basename= window.location.pathname || ''
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename= {window.location.pathname || ''}>
        <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path='/:id' component={EqDisplay}/>
        </Switch>
     </BrowserRouter>
    </ThemeProvider>
  )

}