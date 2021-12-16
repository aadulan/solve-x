import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import './Styles/index.css';
import EqDisplay from './Components/Display/EqDisplay';
import Start from './Components/Start/Start';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        maxSnack={1}
      >
        <HashRouter basename={''}>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/:id" component={EqDisplay} />
          </Switch>
        </HashRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
