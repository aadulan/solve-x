import React from 'react';
import MethodMenu from '../Settings/MethodMenu';
import HelperPop from '../Settings/HelperPop';
import { Link } from 'react-router-dom';
import Dialog from '../Info/Info';
import { makeStyles } from '@mui/styles';
import { AppBar, Divider, Toolbar } from '@mui/material';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 5,
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 275,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to={{
              pathname: '/',
            }}
            style={{ marginRight: 'auto' }}
          >
            <img
              src={process.env.PUBLIC_URL + '/operations.svg'}
              alt="logo"
              style={{ width: 50, height: 50, marginRight: 'auto' }}
            ></img>
          </Link>
          <MethodMenu onChangeMethod={props.onChangeMethod} />
          <div
            style={{ height: 'auto', width: 20, alignSelf: 'stretch', display: 'flex' }}
          >
            <Divider
              style={{ height: '60%', margin: 'auto', backgroundColor: 'white' }}
              orientation="vertical"
            />
          </div>
          <HelperPop
            onChangeUnpack={props.onChangeUnpack}
            onChangeSigns={props.onChangeSigns}
            onChangeHelper={props.onChangeHelper}
          />
          <div
            style={{ height: 'auto', width: 20, alignSelf: 'stretch', display: 'flex' }}
          >
            <Divider
              style={{ height: '60%', margin: 'auto', backgroundColor: 'white' }}
              orientation="vertical"
            />
          </div>
          <Dialog />
        </Toolbar>
      </AppBar>
    </div>
  );
}
