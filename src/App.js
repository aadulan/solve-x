import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
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
  // var basename= window.location.pathname || ''
  return (
    <HashRouter basename= {window.location.pathname || ''}>

    <ThemeProvider theme={theme}>
        <Switch >
        <Route exact path="/" component={Start} />
        <Route exact path='/:id' component={EqDisplay}/>
        </Switch>
    </ThemeProvider>
    </HashRouter>
  )

}