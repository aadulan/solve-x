import React from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
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

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={window.location.pathname || ''}>
        <div>
          <Route exact path="/" component={withRouter(Start)} />
          <Route path="/solve" component={withRouter(EqDisplay)}/>
        </div>
     </BrowserRouter>
    </ThemeProvider>
  )

}