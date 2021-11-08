import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './Styles/index.css';
import EqDisplay from './Components/Display/EqDisplay';
import Start from './Components/Start/Start';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5",
    },
  },
});


export default function App(props) {
  // var basename= window.location.pathname || ''
  return (
    <HashRouter basename={''}>

    <ThemeProvider theme={theme}>
        <Switch >
        <Route exact path="/" component={Start} />
        <Route exact path='/:id' component={EqDisplay}/>
        </Switch>
    </ThemeProvider>
    </HashRouter>
  )

}