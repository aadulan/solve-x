import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import './Styles/index.css';
import EqDisplay from './Components/Display/EqDisplay';
import Start from './Components/Start/Start';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ServiceWorkerWrapper from './ServiceWorkerWrapper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ServiceWorkerWrapper> */}
      <SnackbarProvider maxSnack={1}>
        <HashRouter basename={''}>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/:id" component={EqDisplay} />
          </Switch>
        </HashRouter>
      </SnackbarProvider>
      {/* </ServiceWorkerWrapper> */}
    </ThemeProvider>
  );
}
